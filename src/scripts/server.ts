import { Resend } from 'resend';



export async function sendMail(emailSubject:string,emailContent:string) {
console.log(import.meta.env.RESEND_API_KEY);

    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    const{data,error} = await resend.emails.send({
        from:'Consulta@resend.dev',
        to:['darkplayer03@gmail.com'],
        subject:emailSubject,
        html:emailContent
    });

    if(error) {
        return console.error({error})
    }

    console.log({data})

}
