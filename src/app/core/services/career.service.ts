import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'newrxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  constructor() {}

  career = new BehaviorSubject<any>([
    {
      id: 1,
      en: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          " If you're passionate about gaming, enjoy creating content to share gaming stories, excel at communicating with a wide audience, immerse yourself in social media usage, and dream of working in the gaming industry, this is your opportunity! We're looking for a dedicated team ready to dive in and craft entertaining content for players. Present the necessary content that ensures players feel engaged and well-informed for a gaming experience they'll cherish. Join us as a part of the Marketing team that's poised to effectively communicate various elements to players.",
        qualifications:
          " <ul class='.custom-ul'> <li> Bachelor's degree in Marketing, Mass Communication, Journalism, Media Studies, or a related field. </li> <li>Minimum of 2 years of experience in writing.</li> <li> Minimum of 1 year of experience in the gaming industry (preferred). </li> <li> Strong knowledge and understanding of Social Media platforms. </li> <li> Attention to detail and high proficiency in Thai spelling and grammar. </li> <li>Upper-intermediate level of English language skills.</li> </ul>",
        responsibilities:
          "<ul> <li> Develop strategies and create content for Social Media or organizational articles that align with the organization's communication objectives, enhancing the brand image and sales of the organization and games. </li> <li> Collaborate with the Marketing Team and Game Team to plan content. </li> <li>Plan and schedule game content.</li> <li> Coordinate, control, and review the work of Graphic Designers and Video Editors to ensure alignment with written content. </li> <li>Manage content timelines.</li> <li> Identify target audiences for organizational or game messaging. </li> <li>Stay updated on Social Media trends and movements.</li> </ul>",
        skills:
          '<ul> <li> Proficient in Microsoft Office, Google Sheets, Google Slides, or Canva. </li> <li>Strong communication and English writing skills.</li> <li> Creative thinker able to design engaging content that aligns well with objectives. </li> <li>Enthusiastic, responsible, and quick to respond.</li> </ul>',
      },
      th: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          'หากคุณหลงใหลในการเล่นเกม ชอบที่จะสร้างคอนเทนต์ เพื่อบอกเล่าเรื่องราวเกี่ยวกับเกม ชอบการสื่อสารถึงผู้คนจำนวนมาก เสพติดการใช้ Social Media และใฝ่ฝันอยากจะทำงานในอุตสาหกรรมเกม นี่คือโอกาสของคุณ! เราต้องการทีมงานที่พร้อมจะลุยและสร้างคอนเทนต์สุดสนุกให้กับผู้เล่น นำเสนอเนื้อหาต่างๆ ที่จำเป็น เพื่อให้มั่นใจได้ว่าผู้เล่นจะรู้สึกสนุกและได้รับข้อมูลต่างๆ มากพอสำหรับการเล่นเกมที่พวกเขารัก มาร่วมเป็นส่วนหนึ่งของทีม Marketing ที่พร้อมจะสื่อสารสิ่งต่างๆ ออกไปให้กับผู้เล่นกันเถอะ',
        qualifications:
          '<ul> <li> ระดับการศึกษาปริญญาตรี สาขาการตลาด สาขาการสื่อสารมวลชน นิเทศศาสตร์ หรือสาขาที่เกี่ยวข้อง </li> <li>มีประสบการณ์ด้านงานเขียนอย่างน้อยไม่ต่ำกว่า 2 ปี</li> <li>มีประสบการณ์ทางด้านเกมอย่างน้อยไม่ต่ำกว่า 1 ปี (จะพิจารณาเป็นพิเศษ)</li> <li>มีความรู้ ความเข้าใจในส่วนของ Social Media เป็นอย่างดี</li> <li> มีความละเอียดในการทำงานสูง และมีความรู้ในการใช้ตัวสะกดและไวยากรณ์ภาษาไทยอย่างถูกต้อง </li> <li> มีทักษะและความรู้ในการใช้ไวยากรณ์ภาษาอังกฤษอยู่ในระดับ Upper intermediate</li> </ul>',
        responsibilities:
          '<ul> <li> วางกลยุทธ์ และสร้างบทความบน Social Media หรือบทความองค์กรให้ตรงต่อจุดประสงค์ของการสื่อสาร เพื่อเสริมสร้างภาพลักษณ์ และการขายขององค์กรและเกม </li> <li> ระดมความคิดร่วมกับ Marketing Team และ Game Tea m สำหรับการวางแผนคอนเทนต์ </li> <li>รับผิดชอบการวางแผน และ จัดตารางการลงคอนเทนต์ของตัวเกม</li> <li> ประสานงาน ควบคุมและตรวจสอบการทำงานของ Graphic Designer และ Video Editor เพื่อให้มีความสอดคล้องกับบทความ </li> <li>ควบคุม จัดการระยะเวลาในการทำงานของบทความและสื่อ</li> <li>สามารถระบุกลุ่มเป้าหมายที่ต้องการจะสื่อสารข้อความขององค์กรหรือเกมได้</li> <li>ติดตามเทรนด์ ความเคลื่อนไหวตาม Social Media อย่างสม่ำเสมอ</li> </ul>',
        skills:
          '<ul> <li>สามารถใช้เครื่องมือ Microsoft office, Google Sheet, Google Slide หรือ Canva ได้เป็นอย่างดี </li> <li>มีทักษะการสื่อสาร และการเขียนภาษาอังกฤษได้เป็นอย่างดี </li> <li>มีความคิดสร้างสรรค์ สามารถออกแบบงานเขียนที่มีจุดเด่น เหมาะสมกับจุดประสงค์ได้เป็นอย่างดี </li> <li>กระตือรือร้น มีความรับผิดชอบสูง และตอบสนองอย่างรวดเร็ว </li> </ul>',
      },
    },
    {
      id: 2,
      en: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          " If you're passionate about gaming, enjoy creating content to share gaming stories, excel at communicating with a wide audience, immerse yourself in social media usage, and dream of working in the gaming industry, this is your opportunity! We're looking for a dedicated team ready to dive in and craft entertaining content for players. Present the necessary content that ensures players feel engaged and well-informed for a gaming experience they'll cherish. Join us as a part of the Marketing team that's poised to effectively communicate various elements to players.",
        qualifications:
          " <ul> <li> Bachelor's degree in Marketing, Mass Communication, Journalism, Media Studies, or a related field. </li> <li>Minimum of 2 years of experience in writing.</li> <li> Minimum of 1 year of experience in the gaming industry (preferred). </li> <li> Strong knowledge and understanding of Social Media platforms. </li> <li> Attention to detail and high proficiency in Thai spelling and grammar. </li> <li>Upper-intermediate level of English language skills.</li> </ul>",
        responsibilities:
          "<ul> <li> Develop strategies and create content for Social Media or organizational articles that align with the organization's communication objectives, enhancing the brand image and sales of the organization and games. </li> <li> Collaborate with the Marketing Team and Game Team to plan content. </li> <li>Plan and schedule game content.</li> <li> Coordinate, control, and review the work of Graphic Designers and Video Editors to ensure alignment with written content. </li> <li>Manage content timelines.</li> <li> Identify target audiences for organizational or game messaging. </li> <li>Stay updated on Social Media trends and movements.</li> </ul>",
        skills:
          '<ul> <li> Proficient in Microsoft Office, Google Sheets, Google Slides, or Canva. </li> <li>Strong communication and English writing skills.</li> <li> Creative thinker able to design engaging content that aligns well with objectives. </li> <li>Enthusiastic, responsible, and quick to respond.</li> </ul>',
      },
      th: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          'หากคุณหลงใหลในการเล่นเกม ชอบที่จะสร้างคอนเทนต์ เพื่อบอกเล่าเรื่องราวเกี่ยวกับเกม ชอบการสื่อสารถึงผู้คนจำนวนมาก เสพติดการใช้ Social Media และใฝ่ฝันอยากจะทำงานในอุตสาหกรรมเกม นี่คือโอกาสของคุณ! เราต้องการทีมงานที่พร้อมจะลุยและสร้างคอนเทนต์สุดสนุกให้กับผู้เล่น นำเสนอเนื้อหาต่างๆ ที่จำเป็น เพื่อให้มั่นใจได้ว่าผู้เล่นจะรู้สึกสนุกและได้รับข้อมูลต่างๆ มากพอสำหรับการเล่นเกมที่พวกเขารัก มาร่วมเป็นส่วนหนึ่งของทีม Marketing ที่พร้อมจะสื่อสารสิ่งต่างๆ ออกไปให้กับผู้เล่นกันเถอะ',
        qualifications:
          '<ul> <li> ระดับการศึกษาปริญญาตรี สาขาการตลาด สาขาการสื่อสารมวลชน นิเทศศาสตร์ หรือสาขาที่เกี่ยวข้อง </li> <li>มีประสบการณ์ด้านงานเขียนอย่างน้อยไม่ต่ำกว่า 2 ปี</li> <li>มีประสบการณ์ทางด้านเกมอย่างน้อยไม่ต่ำกว่า 1 ปี (จะพิจารณาเป็นพิเศษ)</li> <li>มีความรู้ ความเข้าใจในส่วนของ Social Media เป็นอย่างดี</li> <li> มีความละเอียดในการทำงานสูง และมีความรู้ในการใช้ตัวสะกดและไวยากรณ์ภาษาไทยอย่างถูกต้อง </li> <li> มีทักษะและความรู้ในการใช้ไวยากรณ์ภาษาอังกฤษอยู่ในระดับ Upper intermediate</li> </ul>',
        responsibilities:
          '<ul> <li> วางกลยุทธ์ และสร้างบทความบน Social Media หรือบทความองค์กรให้ตรงต่อจุดประสงค์ของการสื่อสาร เพื่อเสริมสร้างภาพลักษณ์ และการขายขององค์กรและเกม </li> <li> ระดมความคิดร่วมกับ Marketing Team และ Game Tea m สำหรับการวางแผนคอนเทนต์ </li> <li>รับผิดชอบการวางแผน และ จัดตารางการลงคอนเทนต์ของตัวเกม</li> <li> ประสานงาน ควบคุมและตรวจสอบการทำงานของ Graphic Designer และ Video Editor เพื่อให้มีความสอดคล้องกับบทความ </li> <li>ควบคุม จัดการระยะเวลาในการทำงานของบทความและสื่อ</li> <li>สามารถระบุกลุ่มเป้าหมายที่ต้องการจะสื่อสารข้อความขององค์กรหรือเกมได้</li> <li>ติดตามเทรนด์ ความเคลื่อนไหวตาม Social Media อย่างสม่ำเสมอ</li> </ul>',
        skills:
          '<ul> <li>สามารถใช้เครื่องมือ Microsoft office, Google Sheet, Google Slide หรือ Canva ได้เป็นอย่างดี </li> <li>มีทักษะการสื่อสาร และการเขียนภาษาอังกฤษได้เป็นอย่างดี </li> <li>มีความคิดสร้างสรรค์ สามารถออกแบบงานเขียนที่มีจุดเด่น เหมาะสมกับจุดประสงค์ได้เป็นอย่างดี </li> <li>กระตือรือร้น มีความรับผิดชอบสูง และตอบสนองอย่างรวดเร็ว </li> </ul>',
      },
    },
    {
      id: 3,
      en: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          " If you're passionate about gaming, enjoy creating content to share gaming stories, excel at communicating with a wide audience, immerse yourself in social media usage, and dream of working in the gaming industry, this is your opportunity! We're looking for a dedicated team ready to dive in and craft entertaining content for players. Present the necessary content that ensures players feel engaged and well-informed for a gaming experience they'll cherish. Join us as a part of the Marketing team that's poised to effectively communicate various elements to players.",
        qualifications:
          " <ul> <li> Bachelor's degree in Marketing, Mass Communication, Journalism, Media Studies, or a related field. </li> <li>Minimum of 2 years of experience in writing.</li> <li> Minimum of 1 year of experience in the gaming industry (preferred). </li> <li> Strong knowledge and understanding of Social Media platforms. </li> <li> Attention to detail and high proficiency in Thai spelling and grammar. </li> <li>Upper-intermediate level of English language skills.</li> </ul>",
        responsibilities:
          "<ul> <li> Develop strategies and create content for Social Media or organizational articles that align with the organization's communication objectives, enhancing the brand image and sales of the organization and games. </li> <li> Collaborate with the Marketing Team and Game Team to plan content. </li> <li>Plan and schedule game content.</li> <li> Coordinate, control, and review the work of Graphic Designers and Video Editors to ensure alignment with written content. </li> <li>Manage content timelines.</li> <li> Identify target audiences for organizational or game messaging. </li> <li>Stay updated on Social Media trends and movements.</li> </ul>",
        skills:
          '<ul> <li> Proficient in Microsoft Office, Google Sheets, Google Slides, or Canva. </li> <li>Strong communication and English writing skills.</li> <li> Creative thinker able to design engaging content that aligns well with objectives. </li> <li>Enthusiastic, responsible, and quick to respond.</li> </ul>',
      },
      th: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          'หากคุณหลงใหลในการเล่นเกม ชอบที่จะสร้างคอนเทนต์ เพื่อบอกเล่าเรื่องราวเกี่ยวกับเกม ชอบการสื่อสารถึงผู้คนจำนวนมาก เสพติดการใช้ Social Media และใฝ่ฝันอยากจะทำงานในอุตสาหกรรมเกม นี่คือโอกาสของคุณ! เราต้องการทีมงานที่พร้อมจะลุยและสร้างคอนเทนต์สุดสนุกให้กับผู้เล่น นำเสนอเนื้อหาต่างๆ ที่จำเป็น เพื่อให้มั่นใจได้ว่าผู้เล่นจะรู้สึกสนุกและได้รับข้อมูลต่างๆ มากพอสำหรับการเล่นเกมที่พวกเขารัก มาร่วมเป็นส่วนหนึ่งของทีม Marketing ที่พร้อมจะสื่อสารสิ่งต่างๆ ออกไปให้กับผู้เล่นกันเถอะ',
        qualifications:
          '<ul> <li> ระดับการศึกษาปริญญาตรี สาขาการตลาด สาขาการสื่อสารมวลชน นิเทศศาสตร์ หรือสาขาที่เกี่ยวข้อง </li> <li>มีประสบการณ์ด้านงานเขียนอย่างน้อยไม่ต่ำกว่า 2 ปี</li> <li>มีประสบการณ์ทางด้านเกมอย่างน้อยไม่ต่ำกว่า 1 ปี (จะพิจารณาเป็นพิเศษ)</li> <li>มีความรู้ ความเข้าใจในส่วนของ Social Media เป็นอย่างดี</li> <li> มีความละเอียดในการทำงานสูง และมีความรู้ในการใช้ตัวสะกดและไวยากรณ์ภาษาไทยอย่างถูกต้อง </li> <li> มีทักษะและความรู้ในการใช้ไวยากรณ์ภาษาอังกฤษอยู่ในระดับ Upper intermediate</li> </ul>',
        responsibilities:
          '<ul> <li> วางกลยุทธ์ และสร้างบทความบน Social Media หรือบทความองค์กรให้ตรงต่อจุดประสงค์ของการสื่อสาร เพื่อเสริมสร้างภาพลักษณ์ และการขายขององค์กรและเกม </li> <li> ระดมความคิดร่วมกับ Marketing Team และ Game Tea m สำหรับการวางแผนคอนเทนต์ </li> <li>รับผิดชอบการวางแผน และ จัดตารางการลงคอนเทนต์ของตัวเกม</li> <li> ประสานงาน ควบคุมและตรวจสอบการทำงานของ Graphic Designer และ Video Editor เพื่อให้มีความสอดคล้องกับบทความ </li> <li>ควบคุม จัดการระยะเวลาในการทำงานของบทความและสื่อ</li> <li>สามารถระบุกลุ่มเป้าหมายที่ต้องการจะสื่อสารข้อความขององค์กรหรือเกมได้</li> <li>ติดตามเทรนด์ ความเคลื่อนไหวตาม Social Media อย่างสม่ำเสมอ</li> </ul>',
        skills:
          '<ul> <li>สามารถใช้เครื่องมือ Microsoft office, Google Sheet, Google Slide หรือ Canva ได้เป็นอย่างดี </li> <li>มีทักษะการสื่อสาร และการเขียนภาษาอังกฤษได้เป็นอย่างดี </li> <li>มีความคิดสร้างสรรค์ สามารถออกแบบงานเขียนที่มีจุดเด่น เหมาะสมกับจุดประสงค์ได้เป็นอย่างดี </li> <li>กระตือรือร้น มีความรับผิดชอบสูง และตอบสนองอย่างรวดเร็ว </li> </ul>',
      },
    },
    {
      id: 4,
      en: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          " If you're passionate about gaming, enjoy creating content to share gaming stories, excel at communicating with a wide audience, immerse yourself in social media usage, and dream of working in the gaming industry, this is your opportunity! We're looking for a dedicated team ready to dive in and craft entertaining content for players. Present the necessary content that ensures players feel engaged and well-informed for a gaming experience they'll cherish. Join us as a part of the Marketing team that's poised to effectively communicate various elements to players.",
        qualifications:
          " <ul> <li> Bachelor's degree in Marketing, Mass Communication, Journalism, Media Studies, or a related field. </li> <li>Minimum of 2 years of experience in writing.</li> <li> Minimum of 1 year of experience in the gaming industry (preferred). </li> <li> Strong knowledge and understanding of Social Media platforms. </li> <li> Attention to detail and high proficiency in Thai spelling and grammar. </li> <li>Upper-intermediate level of English language skills.</li> </ul>",
        responsibilities:
          "<ul> <li> Develop strategies and create content for Social Media or organizational articles that align with the organization's communication objectives, enhancing the brand image and sales of the organization and games. </li> <li> Collaborate with the Marketing Team and Game Team to plan content. </li> <li>Plan and schedule game content.</li> <li> Coordinate, control, and review the work of Graphic Designers and Video Editors to ensure alignment with written content. </li> <li>Manage content timelines.</li> <li> Identify target audiences for organizational or game messaging. </li> <li>Stay updated on Social Media trends and movements.</li> </ul>",
        skills:
          '<ul> <li> Proficient in Microsoft Office, Google Sheets, Google Slides, or Canva. </li> <li>Strong communication and English writing skills.</li> <li> Creative thinker able to design engaging content that aligns well with objectives. </li> <li>Enthusiastic, responsible, and quick to respond.</li> </ul>',
      },
      th: {
        title: 'Content Creator',
        location: 'Bangkok, Thailand',
        description:
          'หากคุณหลงใหลในการเล่นเกม ชอบที่จะสร้างคอนเทนต์ เพื่อบอกเล่าเรื่องราวเกี่ยวกับเกม ชอบการสื่อสารถึงผู้คนจำนวนมาก เสพติดการใช้ Social Media และใฝ่ฝันอยากจะทำงานในอุตสาหกรรมเกม นี่คือโอกาสของคุณ! เราต้องการทีมงานที่พร้อมจะลุยและสร้างคอนเทนต์สุดสนุกให้กับผู้เล่น นำเสนอเนื้อหาต่างๆ ที่จำเป็น เพื่อให้มั่นใจได้ว่าผู้เล่นจะรู้สึกสนุกและได้รับข้อมูลต่างๆ มากพอสำหรับการเล่นเกมที่พวกเขารัก มาร่วมเป็นส่วนหนึ่งของทีม Marketing ที่พร้อมจะสื่อสารสิ่งต่างๆ ออกไปให้กับผู้เล่นกันเถอะ',
        qualifications:
          '<ul> <li> ระดับการศึกษาปริญญาตรี สาขาการตลาด สาขาการสื่อสารมวลชน นิเทศศาสตร์ หรือสาขาที่เกี่ยวข้อง </li> <li>มีประสบการณ์ด้านงานเขียนอย่างน้อยไม่ต่ำกว่า 2 ปี</li> <li>มีประสบการณ์ทางด้านเกมอย่างน้อยไม่ต่ำกว่า 1 ปี (จะพิจารณาเป็นพิเศษ)</li> <li>มีความรู้ ความเข้าใจในส่วนของ Social Media เป็นอย่างดี</li> <li> มีความละเอียดในการทำงานสูง และมีความรู้ในการใช้ตัวสะกดและไวยากรณ์ภาษาไทยอย่างถูกต้อง </li> <li> มีทักษะและความรู้ในการใช้ไวยากรณ์ภาษาอังกฤษอยู่ในระดับ Upper intermediate</li> </ul>',
        responsibilities:
          '<ul> <li> วางกลยุทธ์ และสร้างบทความบน Social Media หรือบทความองค์กรให้ตรงต่อจุดประสงค์ของการสื่อสาร เพื่อเสริมสร้างภาพลักษณ์ และการขายขององค์กรและเกม </li> <li> ระดมความคิดร่วมกับ Marketing Team และ Game Tea m สำหรับการวางแผนคอนเทนต์ </li> <li>รับผิดชอบการวางแผน และ จัดตารางการลงคอนเทนต์ของตัวเกม</li> <li> ประสานงาน ควบคุมและตรวจสอบการทำงานของ Graphic Designer และ Video Editor เพื่อให้มีความสอดคล้องกับบทความ </li> <li>ควบคุม จัดการระยะเวลาในการทำงานของบทความและสื่อ</li> <li>สามารถระบุกลุ่มเป้าหมายที่ต้องการจะสื่อสารข้อความขององค์กรหรือเกมได้</li> <li>ติดตามเทรนด์ ความเคลื่อนไหวตาม Social Media อย่างสม่ำเสมอ</li> </ul>',
        skills:
          '<ul> <li>สามารถใช้เครื่องมือ Microsoft office, Google Sheet, Google Slide หรือ Canva ได้เป็นอย่างดี </li> <li>มีทักษะการสื่อสาร และการเขียนภาษาอังกฤษได้เป็นอย่างดี </li> <li>มีความคิดสร้างสรรค์ สามารถออกแบบงานเขียนที่มีจุดเด่น เหมาะสมกับจุดประสงค์ได้เป็นอย่างดี </li> <li>กระตือรือร้น มีความรับผิดชอบสูง และตอบสนองอย่างรวดเร็ว </li> </ul>',
      },
    },
  ]);

  getCareer() {
    return this.career.asObservable();
  }
}
