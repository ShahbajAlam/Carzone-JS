const root = document.getElementById("root");

const navbar = document.createElement("nav");
navbar.setAttribute("id", "navbar");
navbar.setAttribute("class", "navbar");

const hero = document.createElement("div");
hero.setAttribute("class", "hero-section");
hero.setAttribute("id", "heroSection");

const filterFeatureSection = document.createElement("div");
filterFeatureSection.setAttribute("class", "filter-feature-section");
filterFeatureSection.setAttribute("id", "featureServiceSection");

const filters = document.createElement("div");
filters.setAttribute("class", "filter-content");
filters.setAttribute("id", "filterContent");

const features = document.createElement("div");
features.setAttribute("class", "feature-section");
features.setAttribute("id", "featureSection");

navbar.innerHTML =
    `
        <div class="logo" id="logo">Carzone</div>
        <ul class="menu" id="menu">
            <li id="homeLink">Home</li>
            <li id="serviceLink">Service</li>
            <li id="featuredLink">Featured Cars</li>
            <li id="newLink">New Cars</li>
            <li id="contactLink">Contact</li>
        </ul>
    `;

hero.innerHTML =
    `
        <div class="hero-content" id="heroContent">
            <h1 id="mainHeading">
                GET YOUR
                <span class="highlight" id="dreamCar">DREAM CAR</span> AT A
                <span class="highlight" id="dreamPrice">DREAM PRICE</span>
            </h1>
            <h2 id="subHeading">
                The largest inventory of cars in Northern India
            </h2>
            <button class="contact-btn" id="contactButton">
                Contact Us
            </button>
        </div>
    `;

filters.innerHTML =
    `
        <div class="filter-section" id="filterSection">
            <div class="filter-table">
                <div class="filter-row">
                    <div class="filter-item">
                        <label for="year" id="yearLabel"
                        >Select Year</label
                        >
                        <select id="year">
                            <option>Year</option>
                            {/* <!-- Add year options here --> */}
                        </select>
                    </div>
                    <div class="filter-item">
                        <label for="make" id="makeLabel"
                        >Select Make</label
                        >
                        <select id="make">
                            <option>Make</option>
                            {/* <!-- Add make options here --> */}
                        </select>
                    </div>
                    <div class="filter-item">
                        <label for="model" id="modelLabel"
                        >Select Model</label
                        >
                        <select id="model">
                            <option>Model</option>
                            {/* <!-- Add model options here --> */}
                        </select>
                    </div>
                </div>
                <div class="filter-row">
                    <div class="filter-item">
                        <label for="style" id="styleLabel"
                        >Body Style</label
                        >
                        <select id="style">
                            <option>Style</option>
                            {/* <!-- Add style options here --> */}
                        </select>
                    </div>
                    <div class="filter-item">
                        <label for="condition" id="conditionLabel"
                        >Car Condition</label
                        >
                        <select id="condition">
                            <option>Condition</option>
                            {/* <!-- Add condition options here --> */}
                        </select>
                    </div>
                    <div class="filter-item">
                        <label for="price" id="priceLabel"
                        >Select Price</label
                        >
                        <select id="price">
                            <option>Price</option>
                            {/* <!-- Add price options here --> */}
                        </select>
                    </div>
                </div>
            </div>
            <button class="search-btn" id="searchButton">Search</button>
        </div>
    `;

features.innerHTML =
    `
        <div class="service-card">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2211/2211425.png"
                alt="Car Icon"
                class="service-icon"
            />
            <h3 class="service-title">Largest Dealership</h3>
            <p class="service-description">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut den fugit sed quia.
            </p>
        </div>
        <div class="service-card">
            <img
                src="https://cdn-icons-png.flaticon.com/512/18497/18497231.png"
                alt="Warranty Icon"
                class="service-icon"
            />
            <h3 class="service-title">Unlimited Warranty</h3>
            <p class="service-description">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut den fugit sed quia.
            </p>
        </div>
        <div class="service-card">
            <img
                src="https://cdn-icons-png.flaticon.com/512/1456/1456840.png"
                alt="Insurance Icon"
                class="service-icon"
            />
            <h3 class="service-title">Insurance Support</h3>
            <p class="service-description">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut den fugit sed quia.
            </p>
        </div>
    `;

filterFeatureSection.append(filters, features);
root.append(navbar, hero, filterFeatureSection);