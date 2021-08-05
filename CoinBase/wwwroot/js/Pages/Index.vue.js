var Index = {
    template: `<div>
                <h2>Bitcoin prices in EUR and USD</h2>
                <div class="row">
                    <div v-for="rate in rates">
                        <div v-if="rate == 'USD'">
                            <div class="md-6">
                               <h4>USD: {{ rate }}</h4> 
                            </div>
                        </div>
                        <div v-else-if="rate == 'EUR'">
                            <div class="md-6">
                               <h4>EUR: {{ rate }}</h4> 
                            </div>
                        </div>
                    </div>
                </div>
               </div> `,


    data() {
        return {
            rates: "",
        }
    },


    mounted() {
        this.fetchBtcData()
    },
    methods: {
        async fetchBtcData() {
            const response = await axios("");
        }
    }


};