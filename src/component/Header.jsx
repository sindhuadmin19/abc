import React from "react";
import "./Header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { BsTextParagraph } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { GiHamburger } from "react-icons/gi";
import { IoPizzaOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";

const Header = () => {
  return (
    <div className="main">
      <div className="frist-box">
        <div className="icons">
          <BsTextParagraph size={"20px"} /> 125 Eastern Cosom St.
          <RiArrowDropDownLine size={"20px"} />
          <div className="searchbar">
            <div className="icon1">
              <IoSearchOutline /> What would you like to eat today?
            </div>
          </div>
        </div>
        <div className="foodimg1">
          <div className="foodimg">
            <div className="class">
              {" "}
              You don't need silver
              <br />
              fork to eat good food
              <div className="box1">
                Learnmore <FiArrowRight />
              </div>
            </div>
            <div className="img">
              <img src="https://i.postimg.cc/76Zgm4DR/Screenshot-2025-03-11-140420-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
        <div className="categories">Choose from popular categories</div>
        <div className="button">
          {" "}
          <button>All</button>{" "}
          <button>
            {" "}
            <GiHamburger />
            Burger
          </button>{" "}
          <button>
            <IoPizzaOutline />
            Pizza
          </button>{" "}
          <button>Pasta</button> <button>Asian</button> <button>Beef</button>{" "}
          <button>Chicken</button> <button>Fish</button>
        </div>
        <div className="hotelcard">
          <div className="card1">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzid4_U1SecPhePXPAg9rYDnQB8z6iycUbQ&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
          <div className="card2">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
          <div className="card3">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
          <div className="card4">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
          <div className="card5">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
        </div>
        <div className="hotelcard2">
        <div className="card6">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
          <div className="card7">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
        </div>
        <div className="card8">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
          <div className="card9">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
          <div className="card10">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxexpm9mUgAdM6cxvHS855s6DvrO7jwcKtg&s"
                alt=""
              />
            </div>
            <div className="name"> Restorentname</div>
            <div className="minute">
              <div className="jh">
                <GoClock />
                15 mins
              </div>
              <div className="jhk">hhh</div>
            </div>
            <div className="order">delivery</div>
          </div>
        
      </div>
      
      <div className="second-box"></div>
    </div>
  );
};
export default Header;
import { FaCircleDot } from "react-icons/fa6";
<FaCircleDot />