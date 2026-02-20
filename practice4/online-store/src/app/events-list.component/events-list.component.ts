import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../event.model';

@Component({
  selector: 'app-events-list',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  events: Event[] = [
    {
      id: 1,
      name: 'Проверочный Stand Up концерт',
      description: 'Комики проверяют новые шутки.',
      price: 5000,
      rating: 4.8,
      image: 'https://ticketon.kz/media/upload/59196u57260_proverochnyy-stand-up-kontsert-08-21-1802.jpg',
      images: ['assets/event1.jpg','assets/event1-2.jpg','assets/event1-3.jpg'],
      link: 'https://ticketon.kz/almaty/event/proverochnyy-stand-up-kontsert-08-21?item_list_name=События&item_list_id=search_result&index=1'
    },
    {
      id: 2,
      name: 'The World of Hans Zimmer',
      description: 'Tynda.music представит новую программу музыки великого кинокомпозитора Ханса Циммера в исполнении симфонического оркестра и хора..',
      price: 10000,
      rating: 4.3,
      image: 'https://ticketon.kz/media/upload/42445u55449_the-world-of-hans-zimmer-v-taldykorgane.jpg',
      images: ['assets/event2.jpg','assets/event2-2.jpg','assets/event2-3.jpg'],
      link: 'https://ticketon.kz/almaty/event/the-world-of-hans-zimmer-v-taldykorgane?item_list_name=События&item_list_id=search_result&index=8'
    },
    {
      id:3,
      name:'Нурболат Абдуллин в Бишкеке',
      description:'Нурболат Абдуллин - популярный артист из Казахстана, известный своей романтической лирикой, живым исполнением и тёплой энергетикой, которую он дарит зрителю.',
      price: 2000,
      rating:4.6,
      image:'https://ticketon.kz/media/upload/63248u57919_afisha.jpg',
      images:[],
      link:'https://ticketon.kz/almaty/event/nurbolat-abdullin-kg?item_list_name=События&item_list_id=search_result&index=6'
    },
    {
      id:4,
      name:'Бағжан Октябрь.«Терапия души»' ,
      description:'«Терапия Души» обновлённая весенняя программа с оркестром',
      price: 4444,
      rating:4.8,
      image:'https://ticketon.kz/media/upload/60027u57919_frame-176442.png',
      images:[],
      link:'https://ticketon.kz/almaty/event/bagzhan-october-kg?item_list_name=События&item_list_id=search_result&index=19'
    },
    {
      id:5,
      name:'«ХОЛИВАР» Фронтовой концерт',
      description:'Это слово возникло от английского holy war - «священная война» - и означает непрекращающийся спор, дискуссию в интернете, которая вышла за рациональные рамки и превратилась в бессмысленный конфликт.',
      price:9999,
      rating:5,
      image:'https://ticketon.kz/media/upload/46488u54364_var-frontovoy-konts.jpg',
      images:[],
      link:'https://ticketon.kz/almaty/event/kholivar-frontovoy-kontsert?item_list_name=События&item_list_id=search_result&index=2'
    },
    {
      id:6,
      name:'Праздничный Stand Up концерт в Алматы',
      description:'Данное мероприятия носит исключительно развлекательный характер, не несет в себе цель задеть/ обидеть/ оскорбить чьи-либо чувства. Все, что сказано на сцене, представлено исключительно в юмористическом ключе.',
      price:15000,
      rating:4.5,
      image:'https://ticketon.kz/media/upload/55185u53673_prazdnichnyy-stand-up-kontsert-v-almaty.jpg',
      images:[],
      link:'https://ticketon.kz/almaty/event/prazdnichnyy-stand-up-kontsert-v-almaty?item_list_name=События&item_list_id=allEvents&index=3'
    }


  ];

  share(event: Event) {
    const message = encodeURIComponent(`Check this event: ${event.link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
}
