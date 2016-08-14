<template>
    <div class="view-container pt44 pb100">
        <vue-page-header :props="pageheader">
            <i class="icon-back" slot="prev"></i>
            <span slot="next" @click="handleEdit">编辑</span>
        </vue-page-header>
        <section class="shopingcart-wraper" v-if="retlistsLength">
            <article class="shopingcart-item" v-for="list in retlists" track-by="$index">
                <div class="shopingcart-item-hd">
                    <div class="shopingcart-item-td-1">
                        <vue-my-radio :checked="list.isAllChecked" @change="singleAllCheck(list.id)"></vue-my-radio>
                    </div>
                    <div class="shopingcart-item-td-2">
                        <span class="name">{{list.name}}</span>
                    </div>
                </div>
                <div layout="row center-justify" class="shopingcart-item-bd" v-for="good in list.goods">
                    <div self="size-x0" class="shopingcart-item-td-1">
                        <vue-my-radio :checked="good.isChecked" @change="update(list.id, good.id, 'isChecked')"></vue-my-radio>
                    </div>
                    <div self="size-x0 top" class="shopingcart-item-td-2">
                        <img :src="good.img" :alt="good.name" @click="handleroute('/goods/'+good.id)">
                    </div>
                    <div self="size-x1 top" class="shopingcart-item-td-3">
                        <h4>{{good.name}}</h4>
                        <div class="shopingcart-number">
                            <span class="sub" @click="changeNumber(list.id, good.id, 'sub')"></span>
                            <span class="num">{{good.number}}</span>
                            <span class="add" @click="changeNumber(list.id, good.id, 'add')"></span>
                        </div>
                    </div>
                    <div self="size-x0 top" class="shopingcart-item-td-4">
                        <p class="p1">￥{{good.newprice}}</p>
                        <p class="p2">￥{{good.oldprice}}</p>
                        <span class="shopingcat-delete" v-show="edit" @click="handleDelete(list.id, good.id)"></span>
                    </div>
                </div>
                <div class="shopingcart-item-ft">
                    <div layout="row top-justify" class="row">
                        <div self="size-x0" v-if="list.postage">
                            <span class="icon-code">包邮</span>
                        </div>
                        <div self="size-x1">{{list.text}}</div>
                    </div>
                    <div class="row text-right">
                        <span>运费：{{list.postprice}}元</span>
                    </div>
                    <div class="row text-right">
                        <span>小计（共{{list.allNumber}}件）:</span>
                        <span class="color-f64c4c">￥{{list.allPrice}}</span>
                    </div>
                </div>
            </article>
            <article class="shopingcart-btn-wraper">
                <button class="shopingcart-btn" @click="handleroute('pay')">结算（{{allTotalnumber}}）</button>
                <div class="text">
                    <p class="p1">
                        <span class="post">不含运费</span>
                        <span class="all">合计:</span>
                        <span class="price">￥{{allTotalprice}}</span>
                    </p>
                    <p class="p2">
                        <span>为您节省：</span>
                        <span>￥{{saveprice}}</span>
                    </p>
                </div>
                <vue-my-radio :checked="allChecked" @change="changeAllcheck"></vue-my-radio>
                全选
            </article>
        </section>
        <section v-else>
            <div class="shopingcart-none">
                <p>空荡荡的…</p>
                <button class="btn-primary-reverse" @click="handleroute('dailysale')">看看今日促销</button>
            </div>
            <h3 class="base-title">
                <span>热卖商品</span>
            </h3>
            <article class="hotgoods-list">
                <vue-hot-goods :hotgoods="hotgoods"></vue-hot-goods>
            </article>
        </section>
        <vue-page-footer></vue-page-footer>
    </div>
</template>
<script>
    import {shopcartGoods} from "../../datas/lists";
    import VuePageHeader from "../components/page_header.vue";
    import VuePageFooter from "../components/page_footer.vue";
    import handlerouteJS from "../mxins/handleroute.js";
    import VueMyRadio from "../components/my_radio.vue";
    import VueHotGoods from "../components/hotgood.vue";
    let retlists = shopcartGoods.map(function (val, i) {
        let isAllChecked = true;
        let allNumber = 0;
        let allPrice = 0;
        val.goods.map(function (_val, _i) {
            if (!_val.isChecked) {
                isAllChecked = false;
            } else {
                allNumber += _val.number;
                allPrice += _val.number * parseFloat(_val.newprice);
            }
        })
        val["isAllChecked"] = isAllChecked;
        val["allNumber"] = allNumber;
        val["allPrice"] = allPrice;
        return val;
    });
    let hotgoods = []
    for (let i = 0; i < 9; i++) {
        hotgoods.push({
            img: "./asset/img/temp/shop1.jpg",
            name: "枣先生【特级】红枣夹桃500",
            newprice: "54.90",
            oldprice: "84.90",
            ispostage: true,
            peopleNumber: 32,
            id: i + 100
        })
    }

    export default{
        mixins: [
            handlerouteJS
        ],
        components: {
            VuePageHeader,
            VuePageFooter,
            VueMyRadio,
            VueHotGoods
        },
        data(){
            return {
                pageheader: {
                    text: "购物车",
                    prev: true,
                    next: true,
                    classname: "center"
                },
                retlists: retlists,
                allTotalprice: 0,
                saveprice: "26",
                edit: false,
                hotgoods: hotgoods
            }
        },
        computed: {
            allTotalnumber: function () {
                let allTotalnumber = 0;
                this.retlists.map(function (val, i) {
                    allTotalnumber += val.allNumber;
                })
                return allTotalnumber;
            },
            allTotalprice: function () {
                let allTotalprice = 0;
                this.retlists.map(function (val, i) {
                    allTotalprice += val.allPrice;
                })
                return allTotalprice;
            },
            allChecked: function () {
                let allChecked = true;
                this.retlists.some(function (val, i) {
                    if (!val.isAllChecked) {
                        allChecked = false;
                    }
                })
                return allChecked;
            },
            retlistsLength: function () {
                return this.retlists.length;
            }
        },
        methods: {
            singleAllCheck: function (pid) {
                this.retlists = this.retlists.map(function (val, i) {
                    if (val.id == pid) {
                        let isAllChecked = !val.isAllChecked;
                        let allNumber = 0;
                        let allPrice = 0;
                        val.goods = val.goods.map(function (_val, _i) {
                            _val.isChecked = isAllChecked;
                            if (_val.isChecked) {
                                allNumber += _val.number;
                                allPrice += _val.number * parseFloat(_val.newprice);
                            }
                            return _val;
                        })
                        val["isAllChecked"] = isAllChecked;
                        val["allNumber"] = allNumber;
                        val["allPrice"] = allPrice;
                    }
                    return val;
                })
            },
            changeNumber: function (pid, cid, type) {
                this.retlists = this.retlists.map(function (val, i) {
                    if (val.id == pid) {
                        let isAllChecked = true;
                        let allNumber = 0;
                        let allPrice = 0;
                        val.goods = val.goods.map(function (_val, _i) {
                            if (_val.id == cid) {
                                _val.isChecked = true;
                                if (type == "add") {
                                    _val.number = _val.number + 1;
                                } else if (type == "sub") {
                                    _val.number = Math.max(_val.number - 1, 1);
                                }
                            }
                            if (!_val.isChecked) {
                                isAllChecked = false;
                            } else {
                                allNumber += _val.number;
                                allPrice += _val.number * parseFloat(_val.newprice);
                            }
                            return _val;
                        })
                        val["isAllChecked"] = isAllChecked;
                        val["allNumber"] = allNumber;
                        val["allPrice"] = allPrice;
                    }
                    return val;
                })
            },
            handleDelete: function (pid, cid) {
                this.retlists = this.retlists.map(function (val, i) {
                    if (val.id == pid) {
                        val.goods = val.goods.filter(function (_val, _i) {
                            return _val.id != cid;
                        })
                        let allNumber = 0;
                        let allPrice = 0;
                        val.goods = val.goods.map(function (_val, _i) {
                            if (_val.isChecked) {
                                allNumber += _val.number;
                                allPrice += _val.number * parseFloat(_val.newprice);
                            }
                            return _val;
                        })
                        val["allNumber"] = allNumber;
                        val["allPrice"] = allPrice;
                    }
                    return val;
                })
                this.retlists = this.retlists.filter(function (val, i) {
                    return val.goods.length;
                })
            },
            update: function (pid, cid) {
                this.retlists = this.retlists.map(function (val, i) {
                    if (val.id == pid) {
                        let isAllChecked = true;
                        let allNumber = 0;
                        let allPrice = 0;
                        val.goods = val.goods.map(function (_val, _i) {
                            if (_val.id == cid) {
                                _val.isChecked = !_val.isChecked;
                            }
                            if (!_val.isChecked) {
                                isAllChecked = false;
                            } else {
                                allNumber += _val.number;
                                allPrice += _val.number * parseFloat(_val.newprice);
                            }
                            return _val;
                        })
                        val["isAllChecked"] = isAllChecked;
                        val["allNumber"] = allNumber;
                        val["allPrice"] = allPrice;
                    }
                    return val;
                })
            },
            changeAllcheck: function () {
                let changeAllcheck = !this.allChecked;
                this.retlists = this.retlists.map(function (val, i) {
                    let allNumber = 0;
                    let allPrice = 0;
                    val.goods = val.goods.map(function (_val, _i) {
                        _val.isChecked = changeAllcheck;
                        if (_val.isChecked) {
                            allNumber += _val.number;
                            allPrice += _val.number * parseFloat(_val.newprice);
                        }
                        return _val;
                    })
                    val["isAllChecked"] = changeAllcheck;
                    val["allNumber"] = allNumber;
                    val["allPrice"] = allPrice;
                    return val;
                })
            },
            handleEdit: function () {
                this.edit = !this.edit;
            }
        },
        ready: function () {
        }
    }
</script>