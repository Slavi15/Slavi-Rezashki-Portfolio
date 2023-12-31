'use client';

import React, { useEffect, useState } from 'react';

const ClientComponent = ({ children }: { children: React.ReactNode }) => {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        const linkMedia = Array.from(document.getElementsByClassName('Home_link__nF9qd') as HTMLCollectionOf<HTMLElement>);
        const darkModeToggle = document.getElementById('darkModeToggle') as HTMLDivElement;

        const linkEducation = Array.from(document.getElementsByClassName('Education_link__eVAoA') as HTMLCollectionOf<HTMLElement>);
        const educationContainer = Array.from(document.getElementsByClassName('Education_educationCard__9bt7q') as HTMLCollectionOf<HTMLElement>);

        const skillsContainer = Array.from(document.getElementsByClassName('Skills_card__C19AD') as HTMLCollectionOf<HTMLElement>);

        const newsItems = document.querySelectorAll<HTMLElement>('.news_item');
        const backgroundItem = document.querySelector('.item-bg') as HTMLDivElement;
        const arrows = document.querySelectorAll<HTMLButtonElement>('.news-slider_arrow');
        const bullets = document.querySelectorAll<HTMLDivElement>('.swiper-pagination-bullet');

        const form = document.querySelector('.Contact_form__VaXHx') as HTMLFormElement;
        const fields = Array.from(document.getElementsByClassName('Contact_field__kqYBX') as HTMLCollectionOf<HTMLElement>);
        const textarea = document.querySelector('.Contact_textarea__tfBeb') as HTMLTextAreaElement;

        darkModeToggle.addEventListener('click', function () {
            if (dark === true) {
                setDark(false);

                document.body.style.color = '#0D0C1D';
                document.body.style.backgroundColor = '#FFFFFF';

                linkEducation.forEach(link => {
                    link.style.color = '#0D0C1D';
                });

                linkMedia.forEach(link => {
                    link.style.color = '#0D0C1D';
                });

                educationContainer.forEach(el => {
                    if (window.innerWidth <= 925) {
                        el.style.backgroundColor = '#F5F5F5';
                        (el.children[0] as HTMLElement).style.border = 'none';
                        (el.children[1] as HTMLElement).style.color = '#282828';
                    } else {
                        el.style.backgroundColor = '#F5F5F5';
                        (el.children[0] as HTMLElement).style.borderRight = '2px solid #ccc';
                        (el.children[1] as HTMLElement).style.color = '#282828';
                    };
                });

                skillsContainer.forEach(el => {
                    el.style.backgroundColor = '#F5F5F5';
                    el.style.color = '#282828';
                });

                newsItems.forEach(newsItem => {
                    if (window.innerWidth >= 800) {
                        newsItem.style.color = '#0D0C1D';

                        newsItem.addEventListener('mouseover', function () {
                            this.style.color = '#EBF7FF';
                        });

                        newsItem.addEventListener('mouseleave', function () {
                            this.style.color = '#0D0C1D';
                        });
                    } else {
                        newsItem.style.setProperty('--color', '#EBF7FF');
                        newsItem.style.color = '#EBF7FF';
                    };
                });

                backgroundItem.style.backgroundColor = '#161D28';

                arrows.forEach(arrow => {
                    arrow.style.backgroundColor = '#161D28';
                    (arrow.children[0].children[0] as HTMLElement).style.fill = '#EBF7FF';
                });

                bullets.forEach(bullet => {
                    bullet.style.backgroundColor = '#161D28';
                });

                form.style.backgroundColor = '#F5F5F5';

                fields.forEach(field => {
                    field.style.borderBottom = '1px solid #CCCCCC';
                    field.style.color = '#282828';
                });

                textarea.style.borderBottom = '1px solid #CCCCCC';
                textarea.style.color = '#282828';
            } else {
                setDark(true);

                document.body.style.color = '#EBF7FF';
                document.body.style.backgroundColor = '#0D0C1D';

                linkEducation.forEach(link => {
                    link.style.color = '#EBF7FF';
                });

                linkMedia.forEach(link => {
                    link.style.color = '#EBF7FF';
                });

                educationContainer.forEach(el => {
                    if (window.innerWidth <= 925) {
                        el.style.backgroundColor = '#161D28';
                        (el.children[0] as HTMLElement).style.border = 'none';
                        (el.children[1] as HTMLElement).style.color = '#B1BED1';
                    } else {
                        el.style.backgroundColor = '#161D28';
                        (el.children[0] as HTMLElement).style.borderRight = '2px solid #191f2b';
                        (el.children[1] as HTMLElement).style.color = '#B1BED1';
                    };
                });

                skillsContainer.forEach(el => {
                    el.style.backgroundColor = '#161D28';
                    el.style.color = '#EBF7FF';
                });

                newsItems.forEach(newsItem => {
                    if (window.innerWidth >= 800) {
                        newsItem.style.color = '#EBF7FF';

                        newsItem.addEventListener('mouseover', function () {
                            this.style.color = '#0D0C1D';
                        });

                        newsItem.addEventListener('mouseleave', function () {
                            this.style.color = '#EBF7FF';
                        });
                    } else {
                        newsItem.style.setProperty('--color', '#0D0C1D');
                        newsItem.style.color = '#0D0C1D';
                    };
                });

                backgroundItem.style.backgroundColor = '#EBF7FF';

                arrows.forEach(arrow => {
                    arrow.style.backgroundColor = '#EBF7FF';
                    (arrow.children[0].children[0] as HTMLElement).style.fill = '#0D0C1D';
                });

                bullets.forEach(bullet => {
                    bullet.style.backgroundColor = '#EBF7FF';
                });

                form.style.backgroundColor = '#161D28';

                fields.forEach(field => {
                    field.style.borderBottom = '1px solid #EBF7FF';
                    field.style.color = '#EBF7FF';
                });

                textarea.style.borderBottom = '1px solid #EBF7FF';
                textarea.style.color = '#EBF7FF';
            };
        });
    }, [dark]);

    return (
        <>
            {children}
        </>
    );
};

export default ClientComponent;