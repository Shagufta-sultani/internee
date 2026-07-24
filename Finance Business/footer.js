const FooterHtml = `
 <div class=" container grid grid-four--cols">
            <div class="f1">
                  <div class="logo">
                    <a href="#">Finance Business</a>
                </div>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facere distinctio fuga dicta blanditiis voluptatem.</p>
                 <div class="inter">
                    <a href="#" class="link-page"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="link-page"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="link-page"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-solid fa-b"></i></a>
                </div>
            </div>
            <div class="f1">
                <h2>Useful Links</h2>
                <li><a href="#"> Vivamus ut tollus mi</a></li>
                <li><a href="#"> Nulla noc cursus off</a></li>
                <li><a href="#"> Vivamus ut tollus mi</a></li>
                <li><a href="#"> Crusus augue hosolius</a></li>
                <li><a href="#"> Lacinia ac sopien</a></li>
            </div>
            <div class="f1">
                <h2>Additional Pages</h2>
              <li>  <a href="#">About Us</a></li>
               <li> <a href="#"> How We Work</a></li>
                <li><a href="#"> Quick Support</a></li>
              <li>  <a href="#"> Contact Us</a></li>
              <li>  <a href="#"> Privacy Policy</a></li>
            </div>
            <div class="f1">
                <h2>Contact Us</h2>
                 <input  type="text" name="" id="username" placeholder="Full Name">
                <input  type="email" name="" id="email" placeholder="E-Mail Address">
                <textarea name="your message" id="" placeholder="Your Message" rows="8" cols="27"></textarea> <br>
                <button class="btn">send message</button>
               
            </div>
        </div>
             <div class="copy-right grid">
            <p>Copyright &copy; 2026 Financial Business. All Right Reserved. Code by Shagufta-sultani</p>
        </div>
`;
const footerElem = document.querySelector(".footer");
 footerElem.insertAdjacentHTML("afterbegin", FooterHtml);