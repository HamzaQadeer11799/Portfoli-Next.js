// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer'

// // const resend = new Resend(process.env.RESEND_API_KEY);
// // const fromEmail = process.env.FROM_EMAIL;
// export async function POST(req, res) {
  
// const body = await req.json();
// console.log('received body', body)
// const {email, subject, message} = body;

//     const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
//     const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
//     const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

//   //nodemailer code

//   const transporter = nodemailer.createTransport({
//     host: "smtp-mail.gmail.com",
//     port: 465,
//     tls: {
//         ciphers: "SSLv3",
//         rejectUnauthorized: false,
//     },

//     auth: {

//         user: username,
//         pass: password
//     }
// });

// //sending email


// try {

//   const mail = await transporter.sendMail({
//       from: email,
//       to: myEmail,
//       subject: `${subject} from ${email}`,
//       html: `
      
//       <p>Email: ${email} </p>
//       <p>Message: ${message} </p>
//       `,
//   })

//   return NextResponse.json({ message: "Success: email was sent" })

// } catch (error) {
//   console.log(error)
//   NextResponse.json({ message: "COULD NOT SEND MESSAGE" },{status:500})
// }


//   //   const { data, error } = await resend.emails.send({
//   //     from: fromEmail,
//   //     to: ['hamza.qadeer11799@gmail.com', email],
//   //     subject: subject,
//   //     react: <>
//   //     <h1>{subject}</h1>
//   //     <p>ThankYou for contacting!</p>
//   //     <p>{message}</p></>,
//   //   });

//   //   if (error) {
//   //     return NextResponse.json({ error }, { status: 500 });
//   //   }

//   //   return NextResponse.json(data);
//   // } catch (error) {
//   //   return NextResponse.json({ error }, { status: 500 });
//   // }
// }


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // Ensure correct import

const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME; // Ensure correct environment variable
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL // Ensure correct environment variable

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Received body:', body);

    const { email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: username,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: email,
      to: myEmail,
      subject: `${subject} from ${email}`,
      html: `
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: 'Could not send message' }, { status: 500 });
  }
}
