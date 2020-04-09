(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c25403"],{"1c64":function(e,t,a){},"1cc6":function(e,t,a){"use strict";var s=a("1c64"),i=a.n(s);i.a},"1cf5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"数据源名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.datasourceName,callback:function(t){e.$set(e.listQuery,"datasourceName",t)},expression:"listQuery.datasourceName"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"数据源",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasource))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据源名称",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasourceName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据源分组",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasourceGroup)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"jdbc url",width:"200",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jdbcUrl?t.row.jdbcUrl:"-"))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"ZK地址",width:"200",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.zkAdress?t.row.zkAdress:"-"))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据库名",width:"200",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.databaseName?t.row.databaseName:"-"))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"注释",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.comments))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(s)}}},[e._v("\n          编辑\n        ")]),e._v(" "),"deleted"!=s.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(s)}}},[e._v("\n          删除\n        ")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"800px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"数据源",prop:"datasource"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"数据源"},on:{change:function(t){return e.selectDataSource(e.temp.datasource)}},model:{value:e.temp.datasource,callback:function(t){e.$set(e.temp,"datasource",t)},expression:"temp.datasource"}},e._l(e.dataSources,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数据源名称",prop:"datasourceName"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"数据源名称"},model:{value:e.temp.datasourceName,callback:function(t){e.$set(e.temp,"datasourceName",t)},expression:"temp.datasourceName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数据源分组",prop:"datasourceGroup"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"数据源分组"},model:{value:e.temp.datasourceGroup,callback:function(t){e.$set(e.temp,"datasourceGroup",t)},expression:"temp.datasourceGroup"}})],1),e._v(" "),e.jdbc||e.mongodb?a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"用户名"},model:{value:e.temp.jdbcUsername,callback:function(t){e.$set(e.temp,"jdbcUsername",t)},expression:"temp.jdbcUsername"}})],1):e._e(),e._v(" "),e.visible?a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.jdbc||e.mongodb,expression:"jdbc || mongodb"}],attrs:{label:"密码"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{type:"password",placeholder:"密码"},model:{value:e.temp.jdbcPassword,callback:function(t){e.$set(e.temp,"jdbcPassword",t)},expression:"temp.jdbcPassword"}},[a("i",{staticClass:"el-icon-view",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"显示密码"},on:{click:function(t){return e.changePass("show")}},slot:"suffix"})])],1):a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.jdbc||e.mongodb,expression:"jdbc || mongodb"}],attrs:{label:"密码"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{type:"text",placeholder:"密码"},model:{value:e.temp.jdbcPassword,callback:function(t){e.$set(e.temp,"jdbcPassword",t)},expression:"temp.jdbcPassword"}},[a("i",{staticClass:"el-icon-check",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"隐藏密码"},on:{click:function(t){return e.changePass("hide")}},slot:"suffix"})])],1),e._v(" "),e.jdbc?a("el-form-item",{attrs:{label:"jdbc url",prop:"jdbcUrl"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"jdbc url"},model:{value:e.temp.jdbcUrl,callback:function(t){e.$set(e.temp,"jdbcUrl",t)},expression:"temp.jdbcUrl"}})],1):e._e(),e._v(" "),e.mongodb?a("el-form-item",{attrs:{label:"地址",prop:"jdbcUrl"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"127.0.0.1:27017"},model:{value:e.temp.jdbcUrl,callback:function(t){e.$set(e.temp,"jdbcUrl",t)},expression:"temp.jdbcUrl"}})],1):e._e(),e._v(" "),e.jdbc?a("el-form-item",{attrs:{label:"jdbc驱动类",prop:"jdbcDriverClass"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"jdbc驱动类"},model:{value:e.temp.jdbcDriverClass,callback:function(t){e.$set(e.temp,"jdbcDriverClass",t)},expression:"temp.jdbcDriverClass"}})],1):e._e(),e._v(" "),e.hbase?a("el-form-item",{attrs:{label:"ZK地址",prop:"zkAdress"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"127.0.0.1:2181"},model:{value:e.temp.zkAdress,callback:function(t){e.$set(e.temp,"zkAdress",t)},expression:"temp.zkAdress"}})],1):e._e(),e._v(" "),e.mongodb?a("el-form-item",{attrs:{label:"数据库名称",prop:"databaseName"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"数据库名称"},model:{value:e.temp.databaseName,callback:function(t){e.$set(e.temp,"databaseName",t)},expression:"temp.databaseName"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"注释"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:e.temp.comments,callback:function(t){e.$set(e.temp,"comments",t)},expression:"temp.comments"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确认\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.testDataSource()}}},[e._v("\n        测试连接\n      ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},i=[],r=a("7e39"),l=a("6724"),o=a("ed08"),n=a("333d"),c={name:"DataxJdbcDatasource",components:{Pagination:n["a"]},directives:{waves:l["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{datasourceName:[{required:!0,message:"this is required",trigger:"blur"}],jdbcUsername:[{required:!0,message:"this is required",trigger:"blur"}],jdbcPassword:[{required:!0,message:"this is required",trigger:"blur"}],jdbcUrl:[{required:!0,message:"this is required",trigger:"blur"}],jdbcDriverClass:[{required:!0,message:"this is required",trigger:"blur"}],datasource:[{required:!0,message:"this is required",trigger:"change"}],zkAdress:[{required:!0,message:"this is required",trigger:"blur"}],databaseName:[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,datasourceName:"",datasourceGroup:"Default",jdbcUsername:"",jdbcPassword:"",jdbcUrl:"",jdbcDriverClass:"",comments:"",datasource:"",zkAdress:"",databaseName:""},visible:!0,dataSources:[{value:"mysql",label:"mysql"},{value:"oracle",label:"oracle"},{value:"postgresql",label:"postgresql"},{value:"sqlserver",label:"sqlserver"},{value:"hive",label:"hive"},{value:"hbase",label:"hbase"},{value:"mongodb",label:"mongodb"}],jdbc:!0,hbase:!1,mongodb:!1}},created:function(){this.fetchData()},methods:{selectDataSource:function(e){"mysql"===e?(this.temp.jdbcUrl="jdbc:mysql://{host}:{port}/{database}",this.temp.jdbcDriverClass="com.mysql.jdbc.Driver"):"oracle"===e?(this.temp.jdbcUrl="jdbc:oracle:thin:@//{host}:{port}/{database}",this.temp.jdbcDriverClass="oracle.jdbc.OracleDriver"):"postgresql"===e?(this.temp.jdbcUrl="jdbc:postgresql://{host}:{port}/{database}",this.temp.jdbcDriverClass="org.postgresql.Driver"):"sqlserver"===e?(this.temp.jdbcUrl="jdbc:sqlserver://{host}:{port};DatabaseName={database}",this.temp.jdbcDriverClass="com.microsoft.sqlserver.jdbc.SQLServerDriver"):"hive"===e&&(this.temp.jdbcUrl="jdbc:hive2://{host}:{port}/{database}",this.temp.jdbcDriverClass="org.apache.hive.jdbc.HiveDriver",this.hbase=this.mongodb=!1,this.jdbc=!0),this.getShowStrategy(e)},fetchData:function(){var e=this;this.listLoading=!0,r["d"](this.listQuery).then((function(t){var a=t.records,s=t.total;e.total=s,e.list=a,e.listLoading=!1}))},resetTemp:function(){this.temp={id:void 0,datasourceName:"",datasourceGroup:"Default",jdbcUsername:"",jdbcPassword:"",jdbcUrl:"",jdbcDriverClass:"",comments:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&r["a"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}))},testDataSource:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&r["e"](e.temp).then((function(t){!1===t.data?e.$notify({title:"Fail",message:t.data.msg,type:"fail",duration:2e3}):e.$notify({title:"Success",message:"Tested Successfully",type:"success",duration:2e3})}))}))},handleUpdate:function(e){var t=this;this.getShowStrategy(e.datasource),this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);r["f"](a).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},getShowStrategy:function(e){"hbase"===e?(this.jdbc=this.mongodb=!1,this.hbase=!0):"mongodb"===e?(this.jdbc=this.hbase=!1,this.mongodb=!0,this.temp.jdbcUrl="{host}:{port}"):(this.hbase=this.mongodb=!1,this.jdbc=!0)},handleDelete:function(e){var t=this;console.log("删除");var a=[];a.push(e.id),r["b"]({idList:e.id}).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))},handleFetchPv:function(e){var t=this;r["c"](e).then((function(e){t.pluginData=e,t.dialogPvVisible=!0}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["f"])(t[e]):t[e]}))}))},changePass:function(e){this.visible=!("show"===e)}}},u=c,d=a("2877"),p=Object(d["a"])(u,s,i,!1,null,null,null);t["default"]=p.exports},"333d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,s){return e/=s/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function n(e,t,a){var s=o(),i=e-s,n=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=n;var o=Math.easeInOutQuad(c,s,i,t);l(o),c<t?r(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&n(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&n(0,800)}}},u=c,d=(a("1cc6"),a("2877")),p=Object(d["a"])(u,s,i,!1,null,"f3b72548",null);t["a"]=p.exports},6724:function(e,t,a){"use strict";a("8d41");var s="@@wavesContext";function i(e,t){function a(a){var s=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var l=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",r.appendChild(o)),i.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return e[s]?e[s].removeHandle=a:e[s]={removeHandle:a},a}var r={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[s].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[s].removeHandle,!1),e[s]=null,delete e[s]}},l=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(l)),r.install=l;t["a"]=r},"7e39":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return c}));var s=a("b775");function i(e){return Object(s["a"])({url:"/api/jobJdbcDatasource",method:"get",params:e})}function r(e){return Object(s["a"])({url:"/api/jobJdbcDatasource/"+e,method:"get"})}function l(e){return Object(s["a"])({url:"/api/jobJdbcDatasource",method:"put",data:e})}function o(e){return Object(s["a"])({url:"/api/jobJdbcDatasource",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/api/jobJdbcDatasource",method:"delete",params:e})}function c(e){return Object(s["a"])({url:"/api/jobJdbcDatasource/test",method:"post",data:e})}},"8d41":function(e,t,a){}}]);