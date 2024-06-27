import { Component, ElementRef } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

interface IAccount {
    id: number;
    acc_no: string;
    balance: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage  {

    config: SwiperOptions = {
        navigation: true,
    };

    accounts: IAccount[] = [
        { id: 1, acc_no: '578694509', balance: '200000' },
        { id: 2, acc_no: '220552780', balance: '50000' },
        { id: 3, acc_no: '401630812', balance: '80000' },
    ];

    index = 0;

    constructor(private el: ElementRef<SwiperContainer>) {}
}
