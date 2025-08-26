import { Component, OnInit } from '@angular/core';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss'],
})
export class LiveChatComponent implements OnInit {
  faCommentDots = faCommentDots;
  isChatBoxDisplay: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
