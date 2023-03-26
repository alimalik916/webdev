function Header() {    
  return (
    <>
      <section class="header">
        <div class="mhcontainer">
          <div class="container" style={{paddingTop: "20px"}}>
            <div class="row">
              <div class="col-md-4">
                <a href={"google.com"}>
                  <img class="headerlogo" src="assets/header_logo.webp" alt="logo" />
                </a>
              </div>

              <div class="col-md-4">
                <div class="col-lg-12 headeraddress">
                  <p>
                    <i
                      class="fa fa-map-signs"
                      style={{fontSize: "16px", color: "#D60B52"}}
                    ></i>
                    26th St, Al Quoz 4<br />
                    Dubai, UAE
                  </p>
                </div>
                <div class="col-lg-12">
                  <p>
                    <i
                      class="fa fa-envelope"
                      style={{fontSize:"16px", color: "#D60B52"}}
                    ></i>
                    <a href="mailto:sales@technologyrental.com">
                      sales@technologyrental.com
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="col-lg-12">
                  <p>
                    <i
                      class="fa fa-phone"
                      style={{fontSize: "16px", color: "#D60B52"}}
                    ></i>
                    <a href="tel:+971 800 0320573"> +971 800 0320573</a>
                    <br />
                    <a href="mailto:dubai@technologyrental.com">
                      dubai@technologyrental.com
                    </a>
                  </p>
                </div>
                <div class="col-lg-12">
                  <p>
                    <i
                      class="fa fa-envelope"
                      style={{fontSize: "16px", color: "#D60B52"}}
                    ></i>
                    <a href="mailto:dubai@technologyrental.com">
                     
                      dubai@technologyrental.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mhcontainer">
            <nav
              class="navbar navbar-expand-lg navbar-dark bg-primary"
              id="navbar_top"
            >
              <div class="container-fluid">
                <a class="navbar-brand" href={"https://www.google.com"}></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="justify-content-center collapse navbar-collapse"
                  id="main_nav"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href={"google.com"}>
                        Home
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href={"google.com"}
                        data-bs-toggle="dropdown"
                      >
                       
                        IT Rental
                      </a>
                      <ul class="dropdown-menu level1">
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Laptop Rental &raquo;
                          </a>
                          <ul class="submenu dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Dell Laptop
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Window Laptop
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Hp Laptop
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Lenovo Laptop
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Gaming Laptop
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Mac Rental
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Phone rental &raquo;
                          </a>
                          <ul class="submenu dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                iPhone Rental
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Android Rental
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Tablet Rental &raquo;
                          </a>
                          <ul class="submenu dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                iPad Hire &raquo;
                              </a>
                              <ul class="submenu dropdown-menu">
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href={"google.com"}
                                  >
                                    iPad Air
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href={"google.com"}>
                                    Cellular iPad
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href={"google.com"}
                                  >
                                    iPad Pro
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href={"google.com"}
                                  >
                                    iPad Mini
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href={"google.com"}
                                  >
                                    9.7 iPad
                                  </a>
                                </li>

                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="{{ route('ipadProTwelveNine') }}"
                                  >
                                    iPad Pro 12.9'
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href={"google.com"}
                                  >
                                    iPad Kiosks & Stands
                                  </a>
                                </li>
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href={"google.com"}
                                  >
                                    iPad Accessories
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Microsoft surface Pro
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Printer Rental &raquo;
                          </a>
                          <ul class="submenu dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Receipt Printer
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Zebra Printer
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                Epson Printer &raquo;
                              </a>
                              <ul class="submenu dropdown-menu">
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href={"google.com"}
                                  >
                                    Epson C3500 Printer Rental
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            EPOS Rental
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href={"google.com"}
                        data-bs-toggle="dropdown"
                      >
                       
                        Event WiFi & Telecom
                      </a>
                      <ul class="dropdown-menu level1">
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Event Wi-Fi &raquo;
                          </a>
                          <ul class="submenu dropdown-menu">
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                Satellite internet Hire
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                4G Internet Hire
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                Wi-Fi in a Box
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                VOIP Services
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                Structured cabling
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href={"google.com"}
                              >
                                Wireless Links
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href={"google.com"}
                        data-bs-toggle=""
                      >
                       
                        Event AV Services
                      </a>
                      <ul class="dropdown-menu level1">
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Audio Visual PC
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Monitor rental
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Touch Screen rental
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            LED Wall rental
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Speaker rental
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Microphone rental
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            PA System
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Live Event Streaming
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Digital Signage
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Projector Rental
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Lightning
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href={"google.com"}
                        data-bs-toggle=""
                      >
                       
                        Services
                      </a>
                      <ul class="dropdown-menu level1">
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Event Staffing
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Registration Hardware
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Handheld Scanners &raquo;
                          </a>
                          <ul class="submenu dropdown-menu">
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                Linea Pro Scanner Rental
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href={"google.com"}>
                                Barcode Scanner Rental
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            RFID Reader Rental
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Badging Sourcing
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href={"google.com"}>
                            Event Logistics
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Event Apps
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Virtual Event Platform
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Technical Planning
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href={"google.com"}
                        data-bs-toggle=""
                      >
                        Contact Us
                      </a>
                      <ul class="dropdown-menu level1">
                        <li>
                          <a
                            class="dropdown-item"
                            href={"google.com"}
                          >
                            Request a Quote
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
