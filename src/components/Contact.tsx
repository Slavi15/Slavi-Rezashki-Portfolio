'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.line}></div>
            <div className={styles.title}>Contact Me</div>
            <div className={styles.description}>
                As a driven and ambitious student pursuing my
                bachelor's degree, I am enthusiastic about
                collaborating on captivating software projects
                and actively seeking job opportunities where
                I can apply and expand my skills. Reach out through
                my contact page to explore how I can contribute
                to your projects or discuss potential job positions
                during my undergraduate studies
            </div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    content: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Minimum 2 characters required!')
                        .required('Required field!'),
                    email: Yup.string()
                        .email('Invalid email address!')
                        .required('Required field!'),
                    subject: Yup.string()
                        .min(10, 'Minimum 10 characters required!')
                        .required('Required field!'),
                    content: Yup.string()
                        .min(10, 'Minimum 10 characters required!')
                        .required('Required field!')
                })}
                onSubmit={async (values) => {
                    const data = {
                        name: values.name,
                        email: values.email,
                        subject: values.subject,
                        content: values.content
                    };

                    await fetch('/api/contact', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(data => {
                            if (data) {
                                const successElement = document.getElementById('success') as HTMLDivElement;
                                successElement.textContent = 'Thanks! The message has been delivered!';
                                if (successElement.textContent) {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 1000);
                                };
                            };
                        })
                        .catch(err => console.log(err));
                }}>
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <div className={styles.message}>Send a message</div>

                        <label id="label" htmlFor="name">Your name</label>
                        <Field
                            className={styles.field}
                            name="name"
                            type="text"
                            enterKeyHint="next" />
                        <div className={styles.error}>
                            <ErrorMessage name="name" />
                        </div>

                        <label id="label" htmlFor="email">Email</label>
                        <Field
                            className={styles.field}
                            name="email"
                            type="email"
                            enterKeyHint="next" />
                        <div className={styles.error}>
                            <ErrorMessage name="email" />
                        </div>

                        <label id="label" htmlFor="subject">Subject</label>
                        <Field
                            className={styles.field}
                            name="subject"
                            type="text"
                            enterKeyHint="next" />
                        <div className={styles.error}>
                            <ErrorMessage name="subject" />
                        </div>

                        <label id="label" htmlFor="content">Message</label>
                        <Field
                            className={styles.textarea}
                            component="textarea"
                            name="content"
                            type="text" />
                        <div className={styles.error}>
                            <ErrorMessage name="content" />
                        </div>

                        <button className={styles.button}
                            disabled={isSubmitting}
                            type="submit">Send</button>

                        <div id="success" className={styles.success}></div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;