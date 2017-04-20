import React from 'react';
import { Row, Col } from 'antd';
import util from '../../common/util.js';
import { relation } from './staticData/index.js';
import G6 from '@ali/g6';
const __DATA__ = {
    nodes: [],
    edges: []
}
const __SIZE__ = {
    width: 800,
    height: 400,
    padding: 50,
    activeEdge: 4,
    maxPox: 0,
    maxPoy: 0
}
const __COLORS__ = {
    // group: ['#5faef2', '#11e9dc', '#08817a', '#7ed912', '#ff7800'],
    active: '#149BCE'
}
const __SHAPE__ = {
    node: 'rect', // rect
    edge: 'smooth', // line smooth
    text: 'text'
}
const __POSITION__ = {
    left: __SIZE__.padding,
    top: __SIZE__.padding,
    leftAdd: 120,
    topAdd: 40
}
const nodeTitle = {};
const RelationChart = React.createClass({
    componentWillMount() {
        let nodeOrderGroups = {};

        __DATA__.nodes = relation.nodes.map(function (node, i) {
            let group = node.group;
            let array = _.split(group, '-');
            let orderNum = array[0];
            let titleText = array[1];
            nodeTitle[orderNum] = titleText;
            if (nodeOrderGroups[titleText] !== undefined) {
                nodeOrderGroups[titleText] ++;
            } else {
                nodeOrderGroups[titleText] = 0;
            }

            let posX = __POSITION__.left + (orderNum - 1) * __POSITION__.leftAdd;
            let posY = __POSITION__.top + (nodeOrderGroups[titleText] + 1) * __POSITION__.topAdd;

            //最大X,Y坐标
            __SIZE__.maxPox = posX > __SIZE__.maxPox ? posX : __SIZE__.maxPox;
            __SIZE__.maxPoy = posY > __SIZE__.maxPoy ? posY : __SIZE__.maxPoy;

            return {
                shape: __SHAPE__.node,
                id: node.id,
                label: node.label,
                value: {
                    title: titleText,
                    content: node.value
                },
                x: posX,
                y: posY,
                order: orderNum
            };
        })
        __DATA__.edges = relation.edges.map(function (edge) {
            return {
                shape: __SHAPE__.edge,
                source: edge.source,
                target: edge.target,
                id: edge.id,
                sourceAnchor: 1,
                targetAnchor: 3
            }
        })
    },
    componentDidMount() {
        //配置G6画布
        let graph = new G6.Graph({
            id: 'relation', // 容器ID
            forceFit: false,
            rollback: false,        // 是否启用回滚机制
            multiSelectable: false, // 是否启用多选
            shortcutable: false,    // 是否开启编辑快捷键
            dragable: true,
            zoomable: false,
            selectable: false,
            height: __SIZE__.height, // 画布高val];
            // width: __SIZE__.width, // 画布宽
            grid: false
        });
        graph.tooltip({
            dx: 10,
            dy: 10
        });
        // 节点映射
        // graph.node().color('order', function (val) {
        //     return __COLORS__.group[val];
        // })
        graph.node().color('value', function (val) {
            if(val) {
                return '#ADADAD';
            } else {
                return '#000'
            }

        })
        graph.node().tooltip('value', function (val) {
            if(val) {
                return [
                    ['类型', val.title],
                    ['描述', val.content]
                ]
            }
        })

        //载入数据
        graph.source(__DATA__.nodes, __DATA__.edges);
        //渲染关系图
        graph.render();
        let AllNodeIDs = __DATA__.nodes.map(function (val) {
            return val.id;
        })
        let AllEdgeIDs = __DATA__.edges.map(function (val) {
            return val.id;
        })
        let relationNodeIDs = [];
        let relationEdgeIDs = [];
        function getTargetNodeID(nodeID, direction) {
            let node = graph.find(nodeID);
            let edges = node.get('edges');
            edges.forEach(function (edge, i) {
                let edgeModel = edge.get('model')
                let source = edgeModel.source;
                let target = edgeModel.target;
                let nextID;
                let nextDirection = direction;
                let nextEdge;
                switch (direction) {
                    case 'source':
                        if (source !== nodeID) {
                            nextID = source;
                            nextEdge = edgeModel.id;
                        }
                        break;
                    case 'target':
                        if (target !== nodeID) {
                            nextID = target;
                            nextEdge = edgeModel.id;
                        }
                        break;
                    default:
                        if (source === nodeID) {
                            nextID = target;
                            nextDirection = 'target';
                            nextEdge = edgeModel.id;
                        } else {
                            nextID = source;
                            nextDirection = 'source';
                            nextEdge = edgeModel.id;
                        }
                }
                if (nextID) {
                    relationNodeIDs.push(nextID);
                    getTargetNodeID(nextID, nextDirection);
                }
                if (nextEdge) {
                    relationEdgeIDs.push(nextEdge);
                }
            })
        }

        graph.on('click', function(ev) {
            let item = ev.item;
            if (item && item.get('type') === 'node') {
                // let startTime = new Date().getTime();
                relationNodeIDs = [];
                relationEdgeIDs = [];
                let clickModel = item.get('model');
                let clickID = clickModel.id;

                getTargetNodeID(clickID);
                relationNodeIDs.push(clickID);
                relationNodeIDs = _.uniq(relationNodeIDs);
                relationEdgeIDs = _.uniq(relationEdgeIDs);


                AllEdgeIDs.forEach(function (edgeID) {
                    let node = graph.find(edgeID)
                    let updateColor = null;
                    let updateSize = null;
                    if (_.indexOf(relationEdgeIDs, edgeID) !== -1) {
                        updateColor = __COLORS__.active;
                        updateSize = __SIZE__.activeEdge;
                    }
                    graph.update(node, {
                        color: updateColor,
                        size: updateSize
                    });
                    graph.refresh();
                })

                AllNodeIDs.forEach(function (nodeID) {
                    let node = graph.find(nodeID)
                    let updateColor = null;
                    if (_.indexOf(relationNodeIDs, nodeID) !== -1) {
                        updateColor = '#4A4AFF';
                    }
                    graph.update(node, {
                        color: updateColor
                    });
                    graph.refresh();
                })
            } else {
                AllEdgeIDs.forEach(function (edgeID) {
                    let node = graph.find(edgeID)
                    graph.update(node, {
                        color: null,
                        size: null
                    });
                    graph.refresh();
                })
                AllNodeIDs.forEach(function (nodeID) {
                    let node = graph.find(nodeID)
                    graph.update(node, {
                        color: null
                    });
                    graph.refresh();
                })
            }

        })
        //添加标题节点
        Object.keys(nodeTitle).forEach( key => {
            graph.add('node', {
                shape: 'text',
                id: nodeTitle[key],
                x: __POSITION__.left + (key - 1) * __POSITION__.leftAdd,
                y: __POSITION__.top,
                label: nodeTitle[key],
                order: key+1
            });
            graph.refresh();
        })
        //视图居中
        const translateX = (graph.get('width')-(__SIZE__.maxPox - __SIZE__.padding)) / 2 - __SIZE__.padding;
        const translateY = (graph.get('height')-(__SIZE__.maxPoy - __SIZE__.padding)) / 2 - __SIZE__.padding;
        let AllNodeAndTextIDs = [...AllNodeIDs, ...Object.values(nodeTitle)];
        AllNodeAndTextIDs.forEach(function (nodeID) {
            let node = graph.find(nodeID)
            graph.update(node, {
                x: node.get('model').x + translateX
            });
            graph.update(node, {
                y: node.get('model').y + translateY
            });
            graph.refresh();
        })
        G6.track(false);
    },
    render() {
        return (
            <div id="relation"></div>
        );
    }
});

export default RelationChart;