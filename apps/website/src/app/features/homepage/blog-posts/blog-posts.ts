import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogPost {
  title: string;
  date: string;
  target: string;
  image: {
    src: string;
    alt: string;
  };
}

@Component({
  selector: 'app-blog-posts',
  imports: [RouterLink],
  templateUrl: './blog-posts.html',
  styleUrl: './blog-posts.scss',
})
export class BlogPosts {
  protected readonly posts: readonly BlogPost[] = [
    {
      title: "Song Kul: What You Need to Know About Kyrgyzstan's Most Untamed Alpine Lake",
      date: 'February 26, 2026',
      target: '/how-to-visit-song-kul-lake-in-kyrgyzstan/',
      image: {
        src: 'https://i0.wp.com/omayatravel.com/wp-content/uploads/2026/04/Yurt-Camp-at-SongKul-Lake-Opt.webp?resize=550%2C550&ssl=1',
        alt: 'Yurt camp at Song Kul Lake at sunset',
      },
    },
    {
      title: '10 Unmissable Places to Visit on Your Bulgaria Trip (Chosen by Local Guides)',
      date: 'April 1, 2026',
      target: '/10-unmissable-places-to-visit-on-your-bulgaria-trip/',
      image: {
        src: 'https://i0.wp.com/omayatravel.com/wp-content/uploads/2026/04/pexels-bkrustev-225203.jpg?resize=550%2C550&ssl=1',
        alt: 'Green lake and hills in Bulgaria',
      },
    },
    {
      title: 'The Complete Visitor Guide to the Rila Monastery in Bulgaria',
      date: 'April 16, 2026',
      target: '/the-complete-visitor-guide-to-rila-monastery/',
      image: {
        src: 'https://i0.wp.com/omayatravel.com/wp-content/uploads/2026/04/Rila-Monastery-Article-2-Opt.webp?resize=550%2C550&ssl=1',
        alt: 'Rila Monastery courtyard in Bulgaria',
      },
    },
  ];
}
