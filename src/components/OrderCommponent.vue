<template>
    <body class="overflow-y-hidden dark:bg-gray-900">
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div class="flex justify-start item-start space-y-2 flex-col">
                <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order
                    #{{ getOrder.code }}</h1>
                <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{{ getOrder.date }}</p>
            </div>
            <div
                class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
                        v-for="(order) in getOrder.orders[0].products.data">
                        <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                            Customer’s Cart</p>
                        <div
                            class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div class="pb-4 md:pb-8 w-full md:w-40">
                                <img class="w-full hidden md:block"
                                    src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?size=626&ext=jpg&ga=GA1.1.1506769116.1690802231&semt=ais"
                                    alt="dress" />
                                <img class="w-full md:hidden"
                                    src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?size=626&ext=jpg&ga=GA1.1.1506769116.1690802231&semt=ais"
                                    alt="dress" />
                            </div>
                            <div
                                class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                        {{ order.name }}</h3>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <div class="text-base dark:text-white xl:text-lg leading-6">Price ${{ order.price }}
                                    </div>
                                    <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{{
                                        order.quantity }}</p>
                                    <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                        ${{ order.total }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div
                                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${{
                                        getOrder.orders[0].subtotal }}</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Payment</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{{
                                        getOrder.orders[0].payment_type }}</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                                    ${{ (getOrder.grand_total) + (80000) }}</p>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div class="flex justify-between items-start w-full">
                                <div class="flex justify-center items-center space-x-4">
                                    <div class="w-8 h-8">
                                        <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div class="flex flex-col justify-start items-center">
                                        <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">{{
                                            getOrder.orders[0].delivery_type }}
                                            Delivery<br /><span class="font-normal">Delivery with 24 Hours</span></p>
                                    </div>
                                </div>
                                <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
                            </div>
                            <!-- <div class="w-full flex justify-center items-center">
                                <button
                                    class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View
                                    Carrier Details</button>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div
                    class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                    <div
                        class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div class="flex flex-col justify-start items-start flex-shrink-0">
                            <div
                                class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src="https://img.freepik.com/premium-photo/title-generated-correctly_956981-2432.jpg?size=626&ext=jpg&ga=GA1.1.1506769116.1690802231&semt=ais"
                                    class="w-16 h-16" alt="avatar" />
                                <div class="flex justify-start items-start flex-col space-y-2">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                                        {{ getOrder.user.name }}</p>
                                    <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
                                </div>
                            </div>

                            <div
                                class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <img class="dark:hidden"
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                                    alt="email">
                                <img class="hidden dark:block"
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                                    alt="email">
                                <p class="cursor-pointer text-sm leading-5 ">{{ getOrder.user.email }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div
                                class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div
                                    class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p
                                        class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                        Shipping Address</p>
                                    <p
                                        class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        {{ getOrder.shipping_address.address }},{{ getOrder.shipping_address.city }},
                                        {{ getOrder.shipping_address.state }}
                                        {{ getOrder.shipping_address.country }}</p>
                                </div>
                                <div
                                    class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p
                                        class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                        Billing Address</p>
                                    <p
                                        class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        {{ getOrder.shipping_address.address }},{{ getOrder.shipping_address.city }},
                                        {{ getOrder.shipping_address.state }}
                                        {{ getOrder.shipping_address.country }}</p>
                                </div>
                            </div>
                            <RouterLink to="/">
                                <div class="flex w-full justify-center items-center md:justify-start md:items-start">

                                    <button
                                        class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                                        Back To Home</button>

                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
  
<script>
import { mapGetters } from 'vuex';
import { RouterLink } from 'vue-router';
export default {
    props: ['orderCode'],
    computed: {
        ...mapGetters('order', ['getOrder']),
    },
    created() {
        this.$store.dispatch('order/fetchOrderData', this.orderCode);
    },
};
</script>
