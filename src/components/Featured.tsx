'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import $ from 'jquery';
import '../styles/Featured.scss';

import teenovatorFinal from '../images/teenovator_final.jpg';
import teenovatorRecursive from '../images/teenovator_recursive.png';
import telerikAcademy from '../images/telerik_academy.jpg';

const Featured = () => {
    useEffect(() => {
        const bg = document.querySelector('.item-bg') as HTMLDivElement;
        // const items = document.querySelectorAll('.news_item');
        // const item = document.querySelector('.news_item');

        if ($(window).width()! > 800) {
            $(document).on("mouseover", ".news_item", function (_event, _element) {
                const newsItems = document.querySelectorAll<HTMLElement>('.news_item');

                newsItems.forEach((element, index) => {
                    element.addEventListener('mouseover', function () {
                        let x = this.getBoundingClientRect().left;
                        let y = this.getBoundingClientRect().top;
                        let width = this.getBoundingClientRect().width;
                        // let height = this.getBoundingClientRect().height;

                        $('.item-bg').addClass('active');
                        $('.news_item').removeClass('active');

                        bg.style.width = `${width}px`;
                        // bg.style.height = `${height}px`;
                        bg.style.transform = `translateX(${x}px) translateY(0px)`;
                    });

                    element.addEventListener('mouseleave', function () {
                        $('.item-bg').removeClass('active');
                        $('.news_item').removeClass('active');
                    });
                });
            });
        };

        // @ts-ignore: disable-next-line
        const swiper = new Swiper('.news-slider', {
            effect: 'coverflow',
            grabCursor: true,
            loop: false,
            centeredSlides: true,
            keyboard: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            // change if loop: true
            initialSlide: 1,
            loopedSlides: 0,
            rewind: true,
            // --------------------
            speed: 300,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 3,
                slideShadows: false
            },
            breakpoints: {
                480: {
                    spaceBetween: 0,
                    centeredSlides: true
                }
            },
            simulateTouch: true,
            navigation: {
                nextEl: '.news-slider-next',
                prevEl: '.news-slider-prev'
            },
            pagination: {
                el: '.news-slider_pagination',
                clickable: true
            },
            on: {
                init: function () {
                    let activeItem = document.querySelector('.swiper-slide-active') as HTMLElement;
                    let sliderItem = activeItem.querySelector('.news_item') as HTMLElement;

                    $('.swiper-slide-active .news_item').addClass('active');

                    let x = sliderItem.getBoundingClientRect().left;
                    let y = sliderItem.getBoundingClientRect().top;
                    let width = sliderItem.getBoundingClientRect().width;
                    // let height = sliderItem.getBoundingClientRect().height;

                    $('.item-bg').addClass('active');

                    bg.style.width = `${width}px`;
                    // bg.style.height = `${height}px`;
                    bg.style.transform = `translateX(${x}px) translateY(0px)`;
                }
            }
        });

        swiper.on('touchEnd', function () {
            $('.news_item').removeClass('active');
            $('.swiper-slide-active .news_item').addClass('active');
        });

        swiper.on('slideChange', function () {
            $('.news_item').removeClass('active');
        });

        swiper.on('slideChangeTransitionEnd', function () {
            $('.news_item').removeClass('active');

            let activeItem = document.querySelector('.swiper-slide-active') as HTMLElement;
            let sliderItem = activeItem.querySelector('.news_item') as HTMLElement;

            $('.swiper-slide-active .news_item').addClass('active');

            let x = sliderItem.getBoundingClientRect().left;
            let y = sliderItem.getBoundingClientRect().top;
            let width = sliderItem.getBoundingClientRect().width;
            // let height = sliderItem.getBoundingClientRect().height;

            $('.item-bg').addClass('active');

            bg.style.width = `${width}px`;
            // bg.style.height = `${height}px`;
            bg.style.transform = `translateX(${x}px) translateY(0px)`;
        });
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
                </link>
            </Head>
            <div className="honorsAwardsContainer">
                <div className="title">Featured</div>

                <div className='wrapper'>
                    <div className="item-bg"></div>

                    <div className='news-slider'>
                        <div className='news-slider_wrp swiper-wrapper'>
                            <div className='news-slider_item swiper-slide'>
                                <Link className='link news_item' href="https://darik.bg/tiinovator-uikend-na-ideite-v-novi-horizonti-s-lili" target='_blank'>
                                    <div className='news-date'>
                                        <span className='news-date_title'>2022</span>
                                        <span className='news-date_txt'>January 19</span>
                                    </div>
                                    <div className='news_title'>
                                        "Тийноватор уикенд на идеите" в "Нови хоризонти с Лили"
                                    </div>
                                    <p className='news_txt'>
                                        Attended the radio programme "New Horizons with Lily"
                                        at "Darik Radio" and presented "Teenovator",
                                        an education programme aimed to foster startup
                                        and entrepreneurial culture in the minds of
                                        Bulgarian students
                                    </p>
                                    <div className='news_img'>
                                        <Image
                                            className='img'
                                            src={teenovatorFinal}
                                            priority={true}
                                            alt='Teenovator 2021 Final' />
                                    </div>
                                </Link>
                            </div>
                            <div className='news-slider_item swiper-slide'>
                                <Link className='link news_item' href="https://therecursive.com/what-future-do-bulgarian-gen-z-entrepreneurs-want-to-create/" target='_blank'>
                                    <div className='news-date'>
                                        <span className='news-date_title'>2021</span>
                                        <span className='news-date_txt'>August 05</span>
                                    </div>
                                    <div className='news_title'>
                                        What future do Bulgarian Gen Z entrepreneurs want to create?
                                    </div>
                                    <p className='news_txt'>
                                        UniFruit is a Gen Z project, aiming to develop the 
                                        technology for bringing back to the Earth satellites 
                                        who have completed their space mission. UniFruit’s idea 
                                        strives to tackle the issue of excessive debris pollution 
                                        in space, as well as
                                    </p>
                                    <div className='news_img'>
                                        <Image
                                            className='img'
                                            src={teenovatorRecursive}
                                            priority={true}
                                            alt='Teenovator Recursive' />
                                    </div>
                                </Link>
                            </div>
                            <div className='news-slider_item swiper-slide'>
                                <Link className='link news_item' href="https://www.telerikacademy.com/school/about/news/details/sastezanie-po-razrabotka-na-igri-v-denya-na-deteto" target='_blank'>
                                    <div className='news-date'>
                                        <span className='news-date_title'>2019</span>
                                        <span className='news-date_txt'>June 04</span>
                                    </div>
                                    <div className='news_title'>
                                        Незабравимо състезание по разработка на игри в Деня на детето
                                    </div>
                                    <p className='news_txt'>
                                        Third Place at Annual Competition for Game Development.
                                        The competition encourages students to develop practical 
                                        programming experience and improve their skills to 
                                        realize and present their ideas through projects.
                                    </p>
                                    <div className='news_img'>
                                        <Image
                                            className='img'
                                            src={telerikAcademy}
                                            priority={true}
                                            alt='Telerik Academy' />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='news-slider_ctr'>
                            <div className='news-slider_arrows'>
                                <button className='news-slider_arrow news-slider-prev'>
                                    <span className="icon-font">
                                        <svg className="icon icon-arrow-left">
                                            <use xlinkHref="#icon-arrow-left"></use>
                                        </svg>
                                    </span>
                                </button>
                                <button className='news-slider_arrow news-slider-next'>
                                    <span className="icon-font">
                                        <svg className="icon icon-arrow-right">
                                            <use xlinkHref="#icon-arrow-right"></use>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className='news-slider_pagination'></div>
                        </div>
                    </div>
                </div>

                <svg visibility="hidden">
                    <defs>
                        <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                            <title>arrow-left</title>
                            <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
                        </symbol>
                        <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                            <title>arrow-right</title>
                            <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
                        </symbol>
                    </defs>
                </svg>
            </div>
            <Script 
                src='https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js' 
                strategy='beforeInteractive'></Script>
        </>
    );
};

export default Featured;