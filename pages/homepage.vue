<template>
  <div>
    <div class="grid grid-rows-4 h-screen bg-white4">
      <div class="row-span-3 bg-blue">
        <div>
          <div class="flex items-center justify-between">
            <div>
              <img src="~/assets/images/ODH_Banding-09 (1)1.png" class="mt-8 ml-28">
            </div>
            <div>
              <ul class="flex mt-8 mr-28 text-lg font-NotoSansThai">
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">เราคือใคร?</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">เราทำอะไร?</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">ผลงาน</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">ข่าวสาร</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">แพ็คเกจ</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">ติดต่อ</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">ร่วมงานกับเรา</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-6 text-white ">เป็นส่วนหนึ่งกับเรา</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-32 flex flex-col items-center justify-center">
          <p class="text-white text-5xl font-NotoSansThai">เริ่มต้นสร้างเว็บไซต์</p>
          <p class="text-yellow text-7xl my-8 font-NotoSansThai">ในราคาที่คุณกำหนดได้</p>
          <p class="text-white text-3xl font-NotoSansThai">ลองดูงานของเราก่อนนะ</p>
          <div class="flex justify-center items-center space-x-6 mt-8">
            <button class="bg-yellow text-white rounded-2xl px-6 py-4 font-NotoSansThai">ขอใบเสนอราคา</button>
            <button class="border border-white text-white rounded-2xl px-6 py-4 font-NotoSansThai">ตรวจสอบราคา</button>
          </div>
        </div>
        <div class="bg-white rounded-2xl flex justify-center space-x-48 mx-28 my-24 py-8 shadow-lg font-NotoSansThai">
          <div class="flex flex-col justify-center items-center">
            <svg-icon name="devices-1" class="w-28 h-28"/>
            <p>ทำเว็บไซต์</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <svg-icon name="security-camera" class="w-28 h-28"/>
            <p>ทำแอพพลิเคชัน</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <svg-icon name="resize" class="w-28 h-28"/>
            <p>ทำกราฟฟิคดีไซน์</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <svg-icon name="office-building" class="w-28 h-28"/>
            <p>ทำการตลาดออนไลน์</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <svg-icon name="graphic-design" class="w-28 h-28"/>
            <p>ออกแบบเว็บไซต์</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white4">
      <div class="flex space-x-4 font-NotoSansThai text-6xl ml-28">
        <span>บริการจาก </span>
        <span class="text-yellow"> OWL DAY HOUSE</span>
      </div>
      <div class="grid grid-cols-3 space-x-6 mx-28 mt-8 ">
        <div class="bg-white shadow-lg flex flex-col px-16 pb-16 rounded-md">
          <svg-icon name="Remoteideation" class="w-96 h-96"/>
          <p class="text-4xl font-semibold mb-4">Web & Design</p>
          <p class="text-lg text-gray23">Check out our creative ways of showing your brand on the internet.</p>
          <div class="mt-8">
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">ออกแบบ UX UI</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">พัฒนา Front-end</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">พัฒนา Responsive</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">พัฒนาระบบหลังบ้าน</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">พัฒนาระบบอื่นๆ</button>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg flex flex-col px-16 rounded-md">
          <svg-icon name="Onlineshopping" class="w-96 h-96"/>
          <p class="text-4xl font-semibold mb-4">Mobile Application</p>
          <p class="text-lg text-gray23">Choose proven technologies, ensuring unlimited possibilities of developing your
            site.</p>
          <div class="mt-8">
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">ระบบ Andriod IOS</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">พัฒนา Mobile Application</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">พัฒนา Web Application</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">พัฒนาระบบอื่นๆ</button>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg flex flex-col px-16 rounded-md">
          <svg-icon name="Designcollaboration" class="w-96 h-96"/>
          <p class="text-4xl font-semibold mb-4">Graphic Design</p>
          <p class="text-lg text-gray23">Check out our creative ways of showing your brand on the internet.</p>
          <div class="mt-8">
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">Banner โฆษณา</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">Logo</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">สื่อสิ่งพิมพ์นามบัตร</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">ไดคัท&Photoshop</button>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="Arrow1" class="w-6 h-6"/>
              <button class="text-gray23 active:text-yellow">อื่นๆ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-blue h-[800px] mt-24 ">
        <div class="flex space-x-4 font-NotoSansThai text-6xl ml-28 pt-32 pb-24">
          <span class="text-white">ความมั่นใจเมื่อทำงานกับเรา</span>
          <span class="text-yellow">OWL DAY HOUSE</span>
        </div>
        <div class="mx-28 grid grid-cols-2">
          <div class="flex items-center mb-24">
            <svg-icon name="001-message" class="w-40 h-40"/>
            <div class="text-white font-NotoSansThai">
              <p class="text-3xl py-3">ช่องทางการติดต่อเรา</p>
              <p class="text-2xl font-light">สามารถติดต่อเราผ่านทาง Website,Facebook,E-mail</p>
            </div>
          </div>
          <div class="flex items-center mb-24">
            <svg-icon name="003-layout" class="w-40 h-40"/>
            <div class="text-white font-NotoSansThai">
              <p class="text-3xl py-3">รับใบเสนอราคา</p>
              <p class="text-2xl font-light">เราจะทำใบเสนอราคาให้คุณเร็วที่สุดและส่งให้คุณทาง E-mail</p>
            </div>
          </div>
          <div class="flex items-center">
            <svg-icon name="002-write" class="w-40 h-40"/>
            <div class="text-white font-NotoSansThai">
              <p class="text-3xl py-3">มีสัญญาการทำงาน</p>
              <p class="text-2xl font-light">งานของลูกค้าจะได้รับตรงตามสัญญาการทำงานทั้งหมด</p>
            </div>
          </div>
          <div class="flex items-center">
            <svg-icon name="004-responsive-design" class="w-40 h-40"/>
            <div class="text-white font-NotoSansThai">
              <p class="text-3xl py-3">ตรวจรับผลงาน</p>
              <p class="text-2xl font-light">เพื่อให้ได้รับงานตรงตามความต้องการของลูกค้าที่สุด</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="py-32 bg-white4">
        <div class="flex justify-center space-x-4 font-NotoSansThai text-6xl ml-28">
          <span>แพคเกจเว็บไซต์</span>
          <span class="text-yellow"> OWL DAY HOUSE</span>
        </div>
        <div class="grid grid-cols-3 space-x-6 mx-28 mt-16 ">
          <div class="bg-white shadow-lg p-16 flex flex-col items-center justify-center font-NotoSansThai rounded-md">
            <div class="w-40 h-12 bg-yellow3 rounded-lg flex justify-center items-center my-10">
              <p class="text-yellow text-2xl">ONE PAGE</p>
            </div>
            <div class="w-36 h-36 bg-yellow3 rounded-full flex justify-center items-center">
              <svg-icon name="graphicDesign" class="w-28 h-28"/>
            </div>
            <p class="text-lg my-6 ">เริ่มต้นที่</p>
            <p class="text-yellow text-5xl font-bold mb-2">15,000฿</p>
            <p class="my-2">Responsive Design รองรับทุกหน้าจอ</p>
            <p class="my-2">ออกแบบแบนเนอร์ใหญ่ 1 แบนเนอร์</p>
            <p class="my-2">ติดตั้งตกแต่งธีมและปรับแต่ง Plug in ที่เกี่ยวข้อง</p>
            <p class="my-2">ระบบรองรับ SEO + url friendly</p>
            <p class="my-2">ติดตั้ง google analytics</p>
            <p class="my-2">ฟรี ติดตั้งปุ่มแชทผ่าน line facebook</p>
            <p class="my-2">รองรับการใช้งาน 1 ภาษา</p>
            <button class="text-yellow text-2xl font-bold rounded-lg border border-yellow mt-4 py-4 w-full">
              สั่งซื้อเว็บไซต์
            </button>
          </div>
          <div class="bg-white shadow-lg px-16 flex flex-col items-center justify-center font-NotoSansThai rounded-md">
            <div class="w-40 h-12 bg-yellow3 rounded-lg flex justify-center items-center my-10">
              <p class="text-yellow text-2xl">BUSINESS</p>
            </div>
            <div class="w-36 h-36 bg-yellow3 rounded-full flex justify-center items-center">
              <svg-icon name="officeBuilding" class="w-28 h-28"/>
            </div>
            <p class="text-lg my-6 ">เริ่มต้นที่</p>
            <p class="text-yellow text-5xl font-bold ">45,000฿</p>
            <p class="my-2">Responsive Design รองรับทุกหน้าจอ</p>
            <p class="my-2">ออกแบบแบนเนอร์ใหญ่ 1 แบนเนอร์</p>
            <p class="my-2">สร้างหน้าหลักไม่เกิน 10 หน้า เพิ่มหน้าเองได้ไม่จำกัด</p>
            <p class="my-2">ลงบทความให้ไม่เกิน 10 บท เพิ่มเองได้ไม่จำกัด</p>
            <p class="my-2">ติดตั้งตกแต่งธีมและปรับแต่ง Plug in ที่เกี่ยวข้อง</p>
            <p class="my-2">ระบบรองรับ SEO + url friendly</p>
            <p class="my-2">รองรับการใช้งาน 1 ภาษา</p>
            <button class="text-white text-2xl font-bold rounded-lg bg-yellow mt-4 py-4 w-full">สั่งซื้อเว็บไซต์
            </button>
          </div>
          <div class="bg-white shadow-lg px-16 flex flex-col items-center justify-center font-NotoSansThai rounded-md">
            <div class="w-48 h-12 bg-yellow3 rounded-lg flex justify-center items-center my-10">
              <p class="text-yellow text-2xl">E-COMMERCE</p>
            </div>
            <div class="w-36 h-36 bg-yellow3 rounded-full flex justify-center items-center">
              <svg-icon name="devices_1" class="w-28 h-28"/>
            </div>
            <p class="text-lg my-6 ">เริ่มต้นที่</p>
            <p class="text-yellow text-5xl font-bold ">65,000฿</p>
            <p class="my-2">Responsive Design รองรับทุกหน้าจอ</p>
            <p class="my-2">ออกแบบแบนเนอร์ใหญ่ 1 แบนเนอร์</p>
            <p class="my-2">ติดตั้งตกแต่งธีมและปรับแต่ง Plug in ที่เกี่ยวข้อง</p>
            <p class="my-2">ระบบรองรับ SEO + url friendly</p>
            <p class="my-2">รองรับการใช้งาน 1 ภาษา</p>
            <p class="my-2">ระบบตะกร้าสินค้าและสมาชิก</p>
            <p class="my-2">ลงสินค้าได้ไม่จำกัด ลงให้เบื้องต้น 30 รายการ</p>
            <button class="text-yellow text-2xl font-bold rounded-lg border border-yellow mt-4 py-4 w-full">
              สั่งซื้อเว็บไซต์
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-2 bg-blue font-NotoSansThai">
        <div class="mt-14 mx-28">
          <p class="text-7xl text-white my-2">ขอใบเสนอราคา กับเรา</p>
          <p class="text-white text-2xl my-2">ตรวจสอบขอใบเสนอราคากับเรา เพื่อให้เราได้จัดสรรงบประมาณของคุณ
            อย่างคุ้มค่า</p>
          <div class="flex items-center mt-16 mb-8">
            <svg-icon name="002-curriculum" class="w-24 h-24"/>
            <div class="text-white px-8">
              <p class="text-2xl py-6">คุมงบได้เอง</p>
              <p class="text-lg">คุณสามารถควบคุมงบประมาณในการสร้างผลงานของคุณเองได้</p>
            </div>
          </div>
          <div class="flex items-center my-8">
            <svg-icon name="003-file" class="w-24 h-24"/>
            <div class="text-white px-8">
              <p class="text-2xl py-6">ตอบกลับอย่างรวดเร็ว</p>
              <p class="text-lg">ทีมงานทำงานอย่างรวดเร็วและมืออาชีพ ตอบกลับการขอเสนอราคาคุณอย่างรวดเร็ว</p>
            </div>
          </div>
          <div class="flex items-center my-8">
            <svg-icon name="004-monitor" class="w-24 h-24"/>
            <div class="text-white px-8">
              <p class="text-2xl py-6">ดูแลคุณจนจบงาน</p>
              <p class="text-lg">ดูแลผลงานอย่างต่อเนื่องจนจบงานและบริการหลังการขายที่ดีเย่ียม</p>
            </div>
          </div>
          <div class="flex items-center my-8">
            <svg-icon name="005-documents" class="w-24 h-24"/>
            <div class="text-white px-8">
              <p class="text-2xl py-6">การันตีคุณภาพงาน</p>
              <p class="text-lg">การันตีคุณภาพผลงาน มีตัวอย่างผลงานมากมายให้คุณตัดสินใจ</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl my-16 mr-28">
          <div class="flex flex-col items-center justify-center">
            <p class="text-4xl pt-8">กรอกรายละเอียดที่คุณต้องการ</p>
            <p class="text-lg pt-2">เฉพาะลูกค้าที่ต้องการจ้างงานเท่านั้น</p>
          </div>
          <div class="px-8 py-8 w-full">
            <div>
              <p class="mb-4 text-2xl">รายละเอียดของงาน (Project details)</p>
              <textarea v-model="message" placeholder="รายละเอียดของงาน (Project details)"
                        class="w-full p-2 h-40 border border-gray21 rounded-lg text-lg"/>
              <div class="my-2 flex justify-center">
                <input placeholder="ตัวอย่างงาน(Reference)สูงสุด 25MB"
                       class="relative w-full p-2 text-lg border border-gray21 rounded-lg h-10"/>
                <button class="absolute right-36 text-white bg-yellow rounded-lg py-2 px-6">Browse</button>
              </div>
              <input v-model="message" placeholder="ลิงค์ตัวอย่างงาน"
                     class="w-full p-2 text-lg border border-gray21 rounded-lg h-10"/>
              <div class="grid grid-cols-2 my-2 space-x-2">
                <input v-model="message" placeholder="ราคางานที่ตั้งไว้ (Budget)"
                       class="w-full p-2 border border-gray21 rounded-lg h-10 text-lg"/>
                <div class="relative">
                  <input class="custom-input w-full border border-gray21 rounded-lg h-10 py-2 p-2 text-lg"
                         placeholder="วันที่ต้องการรับงาน"/>
                  <svg-icon name="Calendar" width="24" height="24" class="absolute right-3 top-3 "/>
                  <date-picker
                    v-model="date"
                    custom-input=".custom-input-date"
                  />
                </div>
              </div>
            </div>
            <div class="mt-6">
              <p class="mb-4 text-2xl">ข้อมูลติดต่อกลับ</p>
              <input v-model="message" placeholder="อีเมล (E-mail)"
                     class="w-full p-2 border text-lg border-gray21 rounded-lg h-10"/>
              <div class="grid grid-cols-9 space-x-2">
                <div>
                  <select class="rounded-lg h-10 p-2 mt-2 w-full text-lg border border-gray21 text-gray24">
                    <option value="+66">+66</option>
                    <option>A</option>
                  </select>
                </div>
                <div class="col-span-8">
                  <input placeholder="Phone number"
                         class="w-full mt-2 p-2 text-lg border border-gray21 rounded-lg h-10"/>
                </div>
              </div>
              <input v-model="message" placeholder="LINE ID"
                     class="w-full mt-2 p-2 text-lg border border-gray21 rounded-lg h-10"/>
              <div class="flex items-center mt-2 ml-2">
                <input checked id="checkbox-1" type="checkbox" value=""
                       class="w-4 h-4 text-gray24 bg-white border border-gray21 rounded">
                <label for="checkbox-1" class="ml-2 text-lg font-light text-black5">ฉันได้อ่านและยอมรับ
                  นโยบายคุ้มคอรงความเป็นส่วนตัว</label>
              </div>
              <button class="bg-yellow w-full text-white text-2xl rounded-lg py-4 mt-6">ส่งรายละเอียด</button>
              <div class="flex justify-center">
                <p class="text-lg mt-6">ทีมงานจะทำการติดต่อกลับอย่างเร็วที่สุด</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white4">
      <div class="mx-28 py-24 ">
        <p class="text-7xl font-NotoSansThai">ลองดูงานของเราก่อนนะ</p>
        <div class="flex items-center space-x-4 font-NotoSansThai text-4xl py-16">
          <span>ดูผลงานทั้งหมดของ</span>
          <span class="text-yellow"> OWL DAY HOUSE</span>
          <svg-icon name="Arrow-Right" class="w-16 h-16"/>
        </div>
        <!--        <div class="grid grid-cols-3 relative">-->
        <!--          <div>-->
        <!--            <img src="~/assets/images/Rectangle105.png">-->
        <!--            <p class="text-4xl font-bold px-2">PEZY ONLINE</p>-->
        <!--          </div>-->
        <!--          <div>-->
        <!--            <img src="~/assets/images/Rectangle106.png">-->
        <!--            <p class="text-4xl font-bold px-2">SPEEK ACADEMY</p>-->
        <!--          </div>-->
        <!--          <div>-->
        <!--            <img src="~/assets/images/Rectangle107.png">-->
        <!--            <p class="text-4xl font-bold px-2">INTERSANT PLUS</p>-->
        <!--          </div>-->
        <!--          <div class="absolute right-0 top-48">-->
        <!--            <svg-icon name="Group287" class="w-16 h-16" />-->
        <!--          </div>-->
        <!--        </div>-->

        <div class="relative" id="customCarousel">
          <client-only>
            <carousel
              :items="3"
              :nav="false"
            >
             <div>
                <img src="~/assets/images/Rectangle105.png">
                <p class="text-4xl font-bold px-2">PEZY ONLINE</p>
              </div>
              <div>
                <img src="~/assets/images/Rectangle106.png">
                <p class="text-4xl font-bold px-2">SPEEK ACADEMY</p>
              </div>
              <div>
                <img src="~/assets/images/Rectangle107.png">
               <p class="text-4xl font-bold px-2">INTERSANT PLUS</p>
              </div>
              <div>
                <img src="~/assets/images/Rectangle106.png">
                <p class="text-4xl font-bold px-2">SPEEK ACADEMY</p>
              </div>
            </carousel>
          </client-only>
          <div class="customNavigation prev_next">
<!--            <a class="prev">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                   class="feather feather-chevron-left">-->
<!--                <polyline points="15 18 9 12 15 6"></polyline>-->
<!--              </svg>-->
<!--            </a>-->
            <a class="next">
              <svg-icon name="Group287" />
            </a>
          </div>
        </div>


        <div class="flex justify-center items-center space-x-4 font-NotoSansThai text-4xl pt-48 ">
          <span>บริษัทชั้นนำต่างๆ เชื่อใจและเลือกใช้บริการของ</span>
          <span class="text-yellow"> OWL DAY HOUSE</span>
        </div>
        <div class="grid grid-cols-6 mt-24">
          <div class="w-56 h-28 bg-white rounded-lg  flex justify-center items-center">
            <img src="~/assets/images/image7.png">
          </div>
          <div class="w-56 h-28 bg-white rounded-lg  flex justify-center items-center">
            <img src="~/assets/images/1Asset12.png">
          </div>
          <div class="w-56 h-28 bg-white rounded-lg  flex justify-center items-center">
            <img src="~/assets/images/SpeekYellow1.png">
          </div>
          <div class="w-56 h-28 bg-white rounded-lg  flex justify-center items-center">

          </div>
          <div class="w-56 h-28 bg-white rounded-lg  flex justify-center items-center">
            <img src="~/assets/images/logo-011.png">
          </div>
          <div class="w-56 h-28 bg-white rounded-lg  flex justify-center items-center">
            <img src="~/assets/images/Frame.png">
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-blue">
        <div class="flex flex-col justify-center items-center pt-48  mx-28">
          <p class="text-7xl font-NotoSansThai text-white pb-8">ร่วมงานกับเรา!</p>
          <p class="text-lg font-NotoSansThai text-white py-8">Let’s get to work on a common project!</p>
          <p class="text-lg font-NotoSansThai text-white">You’re curious what we can do for your business? You want to
            benefit from online marketing or you need graphic design services in your company? You plan to open an
            online store carry out an adwords campaign?</p>
          <button class="text-white text-xl bg-yellow w-48 h-16 rounded-lg font-NotoSansThai">ติดต่อเรา</button>
        </div>
        <div class="grid grid-cols-4 mt-36 mx-28">
          <div>
            <img src="~/assets/images/ODH_Banding-09 (1)1.png">
          </div>
          <div class="text-white font-NotoSansThai text-lg">
            <ul>
              <li class="py-2">SITEMAP:</li>
              <li class="py-2">ผลงาน</li>
              <li class="py-2">ติดต่อ</li>
              <li class="py-2">ร่วมงานกับเรา</li>
            </ul>
          </div>
          <div class="text-white font-NotoSansThai text-lg">
            <ul>
              <li class="py-2">Social:</li>
              <li class="py-2">Facebook</li>
              <li class="py-2">Instagram</li>
            </ul>
          </div>
          <div class="text-white font-NotoSansThai text-lg">
            <ul>
              <li class="py-2">CONTACT US:</li>
              <li class="py-2">กาญจน์กนวิลล์ 5 ซอย 3 114/104 ต.สันกำแพง
                อ.สันกำแพง จ.เชียงใหม่ 50130
              </li>
              <li class="py-2">hi.owldayhouse@gmail.com</li>
            </ul>
          </div>
          <p class="text-lg text-white mt-24 py-4">Copyright © 2019-2021.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "homepage",
  data() {
    return {
      message: '',
      date: '',
    }
  }
}
</script>

<style lang="scss" scoped>

  .customNavigation {
  a {
    position: absolute;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    opacity: 1;
    margin-top: auto;
    margin-bottom: auto;
    box-shadow: -2px 1px 10px #bdbdbd;
    top: calc(45% - 20px);
    cursor: pointer;
  }

  .prev {
    left: -15px;
  }

  .next {
    right: -15px;
  }

}
</style>


