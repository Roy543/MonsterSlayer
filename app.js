function getRandomValue(min, max){
    return Math.florr(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods:{
        attackMonster(){
           const attckValue = getRandomValue(5, 12);
           this.monsterHealth -= attckValue;
           this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 12);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');