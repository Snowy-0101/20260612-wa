Vue.createApp({
    data() {
        return {
           news: `
            <h2>メンテナンス情報</h2>
            <p>本日 <span style="color:red;">21:00</span> より実施します。</p>
            `
        };
    }
}).mount("#app");