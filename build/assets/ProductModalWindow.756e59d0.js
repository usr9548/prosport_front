var W=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(t,e,i)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,g=(t,e)=>{for(var i in e||(e={}))V.call(e,i)&&b(t,i,e[i]);if(y)for(var i of y(e))E.call(e,i)&&b(t,i,e[i]);return t},P=(t,e)=>M(t,A(e));import{_ as B,a as x}from"./index.69fc50e5.js";import{d as D,m as T,b as G,a as F,h as l,w as v,r as u,o as a,f as s,c,e as o,j as m,y as N,n as q,z as C}from"./vendor.7e8d65a9.js";const S=D(()=>x(()=>import("./ModalWindow.d75eee5f.js"),["assets/ModalWindow.d75eee5f.js","assets/ModalWindow.0c272024.css","assets/vendor.7e8d65a9.js","assets/index.69fc50e5.js","assets/index.68f5975a.css"])),Q={name:"product-modal-window",data(){return{contentEditable:!1}},components:{ModalWindow:S},computed:P(g({},T({isAdmin:"clientInfo/isAdminGetter",getProductWindowVisible:"modalWindows/getProductWindowVisibleGetter",getProduct:"modalWindows/getProductGetter",getProductsInBasket:"basketWindow/getProductsInBasketGetter",getUploadedPicture:"products/getUploadedPictureGetter",isItInCart:"basketWindow/isItInCartGetter"})),{id:function(){return this.getProduct.id},getFolder:function(){return this.getProduct.img_path==="not_found.svg"&&!this.getProduct.img_data?!1:"products"},getFullPath:function(){return Boolean(this.getProduct.img_data||!1)},getProductImg:function(){return this.getProduct.img_data||"products/"+this.getProduct.img_path},_isItInCart:function(){return this.isItInCart(this.id)}}),methods:P(g(g({},G({addToCart:"basketWindow/addToCartAction",removeFromCart:"basketWindow/removeFromCartAction",removeProduct:"products/removeProductAction",loadImg:"products/loadImgAction",getProductById:"products/getProductByIdAction",updateProduct:"products/updateProductAction",setProductWindow:"modalWindows/setProductWindowAction",removeProductImg:"products/removeProductImgAction",setWindowVisible:"modalWindows/setWindowVisibleAction"})),F({setVisible:"modalWindows/setVisibleProductWindowMutation",updateTitle:"products/updateProductTitleMutation",updateDescription:"products/updateProductDescriptionMutation",updateCategory:"products/updateProductCategoryMutation",updateSubcategory:"products/updateProductSubcategoryMutation",updatePrice:"products/updateProductPriceMutation",updateAmount:"products/updateProductAmountMutation",updateQuantity:"products/updateProductQuantityMutation",updateImg:"products/updateProductImgMutation",updateProductChanges:"products/updateProductChangesMutation",removeProductChanges:"products/removeProductChangesMutation",setProductImgWindow:"modalWindows/setProductImgWindowMutation",removeProductImgPath:"modalWindows/removeProductImgPathMutation",removeProductImgData:"modalWindows/removeProductImgDataMutation"})),{editMode(t){this.contentEditable=!(t!=null?t:this.contentEditable),this.contentEditable&&this.updateProductChanges(this.getProduct)},_noVisible(){this.setWindowVisible("productWindow"),this.removeProductChanges(),this.editMode(!0)},removeImg(){this.contentEditable=!1;const t=this.getProduct.id;this.removeProductImg(t).then(this.removeProductImgPath).then(this.removeProductImgData).catch(e=>{throw new Error(e)})},async updateImg(t){try{const e=await this.loadImg(t);this.setProductImgWindow(e)}catch(e){throw new Error(e)}},contentClick(){this.isAdmin&&(this.removeProductChanges(),this.editMode())},cancel(){this.contentClick(),this.removeProductImgData()},save(){this.updateProduct().then(this.setProductWindow).then(this.contentClick).catch(t=>{throw new Error(t)})}})},z={class:"product_content"},U={class:"editable_img"},j={key:0},L={class:"remove_img"},O={for:"load_img",class:"load_img"},R={class:"column"},H={class:"column"},J={class:"column"},K={class:"column"},X={class:"column"},Y={class:"column"},Z={class:"price_btn"},$=C(" \u041E\u0442\u043C\u0435\u043D\u0430 "),tt=C(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C "),et={class:"column"},ot={class:"price_btn"},dt={key:1,class:"column"},nt={key:2,class:"column"},st={key:3,class:"column"};function it(t,e,i,at,_,r){const h=u("standard-img"),n=u("standard-text"),I=u("standard-textarea"),p=u("standard-input"),w=u("dynamic-button"),f=u("standard-title"),k=u("modal-window");return a(),l(k,{class:"product_modal_window",onNoVisible:r._noVisible,visible:t.getProductWindowVisible},{default:v(()=>[s("div",z,[s("div",U,[_.contentEditable?(a(),c("div",j,[s("div",L,[s("span",{onClick:e[0]||(e[0]=d=>r.removeImg())},[o(h,{src:"content/remove.svg"})])]),s("input",{accept:"image/*",type:"file",id:"load_img",onChange:e[1]||(e[1]=d=>r.updateImg(d))},null,32)])):m("",!0),s("label",O,[o(h,{fullPath:r.getFullPath,path:r.getProductImg},null,8,["fullPath","path"])])]),_.contentEditable?(a(),c("form",{key:0,class:"product_info",onSubmit:e[10]||(e[10]=N(()=>{},["prevent"]))},[s("div",R,[o(n,{text:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"}),o(I,{class:"column_textarea",value:t.getProduct.title,onInput:e[2]||(e[2]=d=>t.updateTitle(d.target.value))},null,8,["value"])]),s("div",H,[o(n,{text:"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"}),o(p,{class:"column_input",value:t.getProduct.price||"0 \u0440\u0443\u0431.",placeholder:"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",onInput:e[3]||(e[3]=d=>t.updatePrice(d.target.value))},null,8,["value"])]),s("div",J,[o(n,{text:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"}),o(p,{type:"number",max:"9999999",min:"0",class:"column_input",value:t.getProduct.quantity||0,onInput:e[4]||(e[4]=d=>t.updateQuantity(d.target.value))},null,8,["value"])]),s("div",K,[o(n,{text:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),o(p,{class:"column_input",value:t.getProduct.product_category||"",onInput:e[5]||(e[5]=d=>t.updateCategory(d.target.value))},null,8,["value"])]),s("div",X,[o(n,{text:"\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),o(p,{class:"column_input",value:t.getProduct.product_subcategory||"",onInput:e[6]||(e[6]=d=>t.updateSubcategory(d.target.value))},null,8,["value"])]),s("div",Y,[o(n,{text:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),o(I,{class:"column_textarea",value:t.getProduct.description,onInput:e[7]||(e[7]=d=>t.updateDescription(d.target.value))},null,8,["value"])]),s("div",Z,[o(w,{onClick:e[8]||(e[8]=d=>r.cancel()),class:"dynamic_btn",style:{background:"#999"}},{default:v(()=>[$]),_:1}),o(w,{onClick:e[9]||(e[9]=d=>r.save()),class:"dynamic_btn"},{default:v(()=>[tt]),_:1})])],32)):(a(),c("div",{key:1,class:q(["product_info",{product_info_admin:t.isAdmin}]),onClick:e[14]||(e[14]=(...d)=>r.contentClick&&r.contentClick(...d))},[s("div",et,[o(f,{class:"product_title",text:t.getProduct.title},null,8,["text"])]),t.getProduct.quantity===0?(a(),l(n,{key:0,class:"product_quantity",text:"\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"})):m("",!0),s("div",ot,[o(n,{class:"product_price",text:t.getProduct.price},null,8,["text"]),t.isAdmin?(a(),l(n,{key:0,class:"product_in_basket",onClick:e[11]||(e[11]=d=>t.deleteProduct()),text:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"})):r._isItInCart?(a(),l(n,{key:1,class:"product_in_basket",onClick:e[12]||(e[12]=d=>t.removeFromCart(t.getProduct.id)),text:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B"})):(a(),l(n,{key:2,class:"product_in_basket",onClick:e[13]||(e[13]=d=>t.addToCart(t.getProduct)),text:"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"}))]),t.getProduct.quantity?(a(),c("div",dt,[o(n,{text:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"}),o(n,{text:t.getProduct.quantity},null,8,["text"])])):m("",!0),t.getProduct.product_category?(a(),c("div",nt,[o(n,{text:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),o(n,{text:t.getProduct.product_category},null,8,["text"])])):m("",!0),t.getProduct.product_subcategory?(a(),c("div",st,[o(n,{text:"\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),o(n,{text:t.getProduct.product_subcategory},null,8,["text"])])):m("",!0),o(n,{class:"product_description",text:t.getProduct.description},null,8,["text"])],2))])]),_:1},8,["onNoVisible","visible"])}var lt=B(Q,[["render",it],["__scopeId","data-v-55118296"]]);export{lt as default};
