
import { MusicService } from '../services/music.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from '../services/article.service';
interface Music {
  id: number;
  title: string;
  artist: string;
  genre: string;
  link:string;
}

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent {
  musicList: Music[] = [];
  articleList: any[] = []; 
    selectedGenre: string = ''; 
    
    @ViewChild('musicList', { static: false }) musicListElement!: ElementRef;

    constructor(private musicService: MusicService,private router: Router,private articleService: ArticleService) {}

    ngOnInit(): void {
        // Initially load all music
        this.fetchAllMusic();
        this.fetchArticles();
       
       
    }

    fetchAllMusic(): void {
        this.musicService.getAllMusic().subscribe(
          
            (music: Music[]) => {
                this.musicList = music;
            },
            error => {
                console.error('Error fetching music:', error);
            }
        );

    }


    fetchArticles(): void {
        this.articleService.getArticles().subscribe(
          (data) => {
            this.articleList = data;  // Assign the fetched articles to articleList
          },
          (error) => {
            console.error('Error fetching articles:', error);
          }
        );
      }

    fetchMusicByGenre(): void {
        if (this.selectedGenre) {
            this.musicService.getMusicByGenre(this.selectedGenre).subscribe(
                (music: Music[]) => {
                    this.musicList = music;
                },
                error => {
                    console.error('Error fetching music by genre:', error);
                }
            );
        } else {
            // If no genre is selected, fetch all music
            this.fetchAllMusic();
        }
    }

    playMusic(song: Music): void {
        console.log(`Playing: ${song.title} by ${song.artist}`);
        // Code for playing music, e.g., using an audio player
    }

    navigateTo(route: string) {
      this.router.navigate([route]);
    }
    
    
    logout() {
      
      this.router.navigate(['/login']);
      console.log('User logged out');
    }

    navigateToTest() {
      this.router.navigate(['/test']);
    }


    navigateToArticle(article: any): void {
        this.router.navigate(['/article', article.id]);  // Navigate to the article detail page
      }
}
