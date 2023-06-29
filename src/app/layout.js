'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import '../styles/globals.scss';

export const metadata = {
  title: 'Slavi Rezashki - Official Website - Software Engineer',
  description: 'Slavi Rezashki Personal Portfolio 2023',
};

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const linkMedia = Array.from(document.getElementsByClassName('Home_link__nF9qd'));
    const darkModeToggle = document.getElementById('darkModeToggle');

    const linkEducation = Array.from(document.getElementsByClassName('Education_link__eVAoA'));
    const educationContainer = Array.from(document.getElementsByClassName('Education_educationCard__9bt7q'));

    const skillsContainer = Array.from(document.getElementsByClassName('Skills_card__C19AD'));

    const newsItems = document.querySelectorAll('.news_item');
    const newsItemActive = document.querySelector('.news_item.active');
    const backgroundItem = document.querySelector('.item-bg');
    const arrows = document.querySelectorAll('.news-slider_arrow');
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');

    const form = document.querySelector('.Contact_form__VaXHx');
    const fields = Array.from(document.getElementsByClassName('Contact_field__kqYBX'));
    const textarea = document.querySelector('.Contact_textarea__tfBeb');

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
            el.children[0].style.border = 'none';
            el.children[1].style.color = '#282828';
          } else {
            el.style.backgroundColor = '#F5F5F5';
            el.children[0].style.borderRight = '2px solid #ccc';
            el.children[1].style.color = '#282828';
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
          arrow.children[0].children[0].style.fill = '#EBF7FF';
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
            el.children[0].style.border = 'none';
            el.children[1].style.color = '#B1BED1';
          } else {
            el.style.backgroundColor = '#161D28';
            el.children[0].style.borderRight = '2px solid #191f2b';
            el.children[1].style.color = '#B1BED1';
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
          arrow.children[0].children[0].style.fill = '#0D0C1D';
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
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};