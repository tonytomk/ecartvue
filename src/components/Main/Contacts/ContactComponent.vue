<template src="./ContactComponent.html">
    
</template>
<script lang="ts">
import { Options, Vue,  } from 'vue-class-component';
//import axios from 'axios';

// @Component({
   
// })
export default class ContactComponent extends Vue {
public isSuccess = false;
public mailOptions: any = {
    name: '',
    from: '',
    subject: '',
    body: ''
}
public sendMail() {

const mailBody = `Hi you have a new mail from ${this.mailOptions.name} 
and user email is ${this.mailOptions.from}  and the message details are
${this.mailOptions.body}
`

// axios.post('https://ezmailapp.herokuapp.com/sendMail',{
//     'to':'ezcartapp@gmail.com',
//     'from': this.mailOptions.from,
//     'subject': this.mailOptions.subject,
//     'text': mailBody
// }).then((res)=> {

// if(res.data) {
//     this.isSuccess = true;
//     this.mailOptions = {
//     name: '',
//     from: '',
//     subject: '',
//     body: ''
// }
// }
// })
// }

}
}
</script>
<style lang="scss" scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 3rem;
   
    border: 1px black solid;
    height: 50%;
    .row {
        display: flex;
        font-size: 2rem;
        justify-content: space-between;
        label {
            flex-basis: 40%;
            text-align: left;
        }
        input,
        textarea {
        text-align: left;
        flex-basis: 60%;
        }
        & > * {
            margin-bottom: 2rem;
        }
        &--button {
            justify-content: center;
            .btn {
                width: 20%;
            }
            
        }
        &--email {
            display: flex;
            font-size: 2rem;
            margin-bottom: 1rem;
            justify-content: space-around;
            .header-contact {
                text-decoration: underline;
                text-transform: uppercase;
            }
        }
        .msg {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            flex: 1;
            font-size: 1.5rem;
            margin-left: 10%;
        }
    }
}
</style>