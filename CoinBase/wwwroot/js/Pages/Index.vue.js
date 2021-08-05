var Index = {
    template: `<div>
                <h2>Bitcoin prices in EUR and USD</h2>
                <div class="row">
                    <div v-for="rate in rates"
                         v-if="rate[0] === 'USD' || rate[0] === 'EUR'">
                         <div class="col-md-6">{{ rate[0]}}  {{rate[1]}}</div>
                    </div>
                </div>
               </div> `,


    data() {
        return {
            rates: {},
        }
    },


    mounted() {
        setInterval(this.fetchBtcData(), 10000);
    },
    methods: {
        async fetchBtcData() {
            
            const response = await axios.get("https://localhost:5001/api/coinbase/fetch");
            this.rates = Object.entries(response.data.rates);            
        }
    }


};