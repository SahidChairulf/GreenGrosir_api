import axios from "axios";

const cart = {
    namespaced: true,
    state: {
        cartGetData: [],
    },
    getters: {
        getCartData: (state) => state.cartGetData,
    },
    actions: {
        async fetchgetCartData({ commit }, token) {

            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                    {
                        _temp: null
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                //   console.log(response.data);
                commit("CART_INFO_ITEM", response.data);
            }
            catch (err) {
                console.log(err);
                console.log({ success: false, err });
                commit("CART_INFO_ITEM", { success: false, err });
            }
        },
        async addToCart({ commit }, data) {
            try {
                const response = await axios.post(
                    `https://ecommerce.olipiskandar.com/api/v1/carts/add`,
                    {
                        "variation_id": data.variation_id,
                        "qty": data.qty,
                        // "temp_user_id": null,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    })
                alert('Succes')
                //   console.log(response.data);
                commit("CART_INFO_ITEM", response.data);
            } catch (error) {
                console.error(error);
            } finally {
                const respon = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                    {
                        Key: "value"
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                // console.log(respon.data)
                commit("CART_INFO_ITEM", respon.data)
            }
        },
        async fetchEditData({ commit }, edit) {

            try {
                const response = await axios.post(`https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity`,
                    edit,
                    // temp_user_id : null
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                //   console.log(response.data);
                commit("CART_INFO_ITEM", response.data);
            }
            catch (err) {
                console.log(err);
                console.log({ success: false, err });
                commit("CART_INFO_ITEM", { success: false, err });
            } finally {
                location.reload()
                // console.log(respon.data)
                // commit("CART_INFO_ITEM",respon.data)
            }
        },
        async fetchDeleteData({ commit }, cart_id) {

            try {
                const response = await axios.post(`https://ecommerce.olipiskandar.com/api/v1/carts/destroy`,
                    {
                        cart_id
                        // temp_user_id : null
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                //   console.log(response.data);
                commit("CART_INFO_ITEM", response.data);

            }
            catch (err) {
                console.log(err);
                console.log({ success: false, err });
                commit("CART_INFO_ITEM", { success: false, err });
            } finally {
                location.reload()
                // console.log(respon.data)
                // commit("CART_INFO_ITEM",respon.data)
            }
        },
        // checkout
    async checkoutCart(
        { commit , dispatch },
        {
          shippingAddress,
          billingAddress,
          paymentType,
          deliveryType,
          cart_item_ids,
        }
      ) {
        try {
          const response = await axios.post(
            `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
            {
              shipping_address_id: shippingAddress,
              billing_address_id: billingAddress,
              payment_type: paymentType,
              delivery_type: deliveryType,
              cart_item_ids: cart_item_ids,
              transactionId: null,
              receipt: null,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
            alert('Succces')
        //   console.log(response.data.message);
          commit('CART_INFO_ITEM', response.data)
          dispatch("fetchgetCartData");
        } catch (error) {
          alert("Error");
          console.log(error);
        }
      },
    },
    mutations: {
        CART_INFO_ITEM(state, cartInfo) {
            state.cartGetData = cartInfo;
        },
    }
}

export default cart;