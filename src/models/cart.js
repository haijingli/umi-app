const carts = JSON.parse(localStorage.getItem("cart")) || [];

export default {
    namespace: "cart",//model的命名空间
    state: carts,
    effects: {//异步操作

    },
    reducers: {
        addCart(state, { payload: good }) { 
            const newCart = [...state];
            const idx = state.findIndex(v => v.id === good.id);
            const item = newCart[idx];
            if (item) {
                // 更新对象
                newCart.splice(idx, 1, { ...item, count: item.count + 1 })
            } else {
                newCart.push({ ...good, count: 1 })
            }
            localStorage.setItem("cart",JSON.stringify(newCart))
            return newCart;
        }
    }
}