const NavbarS = `
  <section class="navbar-top container">
            <div class="head">
                <div class="head-txt">
                    <span> <i class="fa-solid fa-clock"></i>Mon-Fri 09:00-17:00</span>
                    <span><i class="fa-solid fa-phone"></i>090-080-0700</span>
                </div>
                <div class="inter">
                    <a href="#" class="link-page"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="link-page"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="link-page"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-solid fa-b"></i></a>
                </div>
            </div>
        </section>

        <section class="menu">
            <div class="navbar-link container">
                <div class="navbar-logo">
                    <a href="#">Finance Business</a>
                </div>

                <nav class="navbar">
                    <ul class="navbarMenu">
                        <li><a href="index.html" class="nav-link">home</a></li>
                        <li><a href="services.html" class="nav-link"> services</a></li>
                        <li><a href="about.html" class="nav-link">about</a></li>
                        <li><a href="contact.html" class="nav-link">contact</a></li>
                    </ul>

                    <div class="desktop-action">
                        <a href="#" class="hamburger">
                            <i class="fa-solid fa-bars"></i>
                        </a>
                    </div>
                    <ul class="mobile-menu">
                        <li><a href="index.html" class="nav-link">home</a></li>
                        <li><a href="services.html" class="nav-link">services</a></li>
                        <li><a href="about.html" class="nav-link">about</a></li>
                        <li><a href="contact.html" class="nav-link">contact</a></li>
                    </ul>
                </nav>
            </div>
        </section>
`;
const navbarElem = document.querySelector(".section-navbar");
navbarElem.insertAdjacentHTML("afterbegin", NavbarS);