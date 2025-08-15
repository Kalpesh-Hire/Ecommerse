import { Breadcrumbs, Button, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductZoom from "../../Components/ProductZoom";
import QtyBox from "../../Components/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import ProductSlider from "../../Components/ProductSlider";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Cropperd satin bomb jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-4 items-center ">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>
          {/* /................................................ Detail right */}
          <div className="productContent w-[60%] pr-10 pl-10 ">
            <h1 className="!text-[24px] font-[600] mb-2 ">
              Siril Poly Silk White & Beige Color Saree With Blouse Piece |
              sarees for Women | saree | sarees
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 !text-[13px]">
                Brands:{" "}
                <span className="font-[500] text-black opacity-75">
                  House of Chikankari
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (5)</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
                $58.00
              </span>
              <span className="oldPrice text-primary text-[20px] font-[600]">
                $58.00
              </span>

              <span className="text-[14px]">
                Availablr in Stocks:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>
            <p className="mt-3 pr-15 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              earum asperiores eius, ipsa mollitia laborum hic officiis dolore
              vel repudiandae accusantium amet at illo nam voluptatibus rerum
              nulla autem deleniti numquam explicabo, expedita quas temporibus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              debitis natus tempore? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos nisi temporibus similique.\
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]"> Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  onClick={() => setProductActionIndex(0)}
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  }`}
                >
                  S
                </Button>
                <Button
                  onClick={() => setProductActionIndex(1)}
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  }`}
                >
                  M
                </Button>
                <Button
                  onClick={() => setProductActionIndex(2)}
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  }`}
                >
                  L
                </Button>
                <Button
                  onClick={() => setProductActionIndex(3)}
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  }`}
                >
                  XL
                </Button>
              </div>
            </div>
            <p className="text-[14px] mt-4 mb-2 text-[#000]">
              Free Shipping(Est. Delivery Time 2-3 Days)
            </p>
            <div className="flex items-center mt-4 py-4 gap-4">
              <div className="qtyBoxWrapper w-[80px] ">
                <QtyBox />
              </div>

              <Button className="btn-org flex gap-2">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <FaRegHeart className="text-[18px]" />
                Add to Wishlist
              </span>
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <IoGitCompareOutline className="text-[18px]" />
                Add to Compare
              </span>
            </div>
          </div>
        </div>
        {/* /...Descriptionssssss */}

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              onClick={() => setActiveTab(0)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 ? "text-primary" : ""
              }`}
            >
              Description
            </span>
            <span
              onClick={() => setActiveTab(1)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 ? "text-primary" : ""
              }`}
            >
              {" "}
              Product Details
            </span>
            <span
              onClick={() => setActiveTab(2)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 ? "text-primary" : ""
              }`}
            >
              {" "}
              Reviews (5)
            </span>
          </div>
          {/* . */}
          {activeTab == 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                sint? Quod impedit sed, maxime, accusamus blanditiis dolor sit
                sunt nesciunt nulla hic qui facere consequuntur cum optio odit!
                Enim sunt cum porro maxime, assumenda tempora.
              </p>

              <h4>Loghtweight Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                sint? Quod impedit sed, maxime, accusamus blanditiis dolor sit
                sunt nesciunt nulla hic qui facere consequuntur cum optio odit!
                Enim sunt cum porro maxime, assumenda tempora.
              </p>
              <h4>Free Shipping & Return</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                sint? Quod impedit sed, maxime, accusamus
              </p>
              <h4>Money Back Guarantee</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                sint? Quod impedit sed, maxime,
              </p>
              <h4>Online Support</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                sint? Quod impedit sed, maxime,
              </p>
            </div>
          )}
          {/* 2 */}
          {activeTab == 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3 */}

          {activeTab == 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions And Answer</h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-auto overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between ">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWPPJeKqMFiZdty1MgpNIUzPE0NYsz0Y0NA&s"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%]">
                        <h4 className="text-[16px]">Kalpesh Hire</h4>
                        <h5 className="text-[13px] mb-0">2014-12-23</h5>
                        <p className="!mt-0 mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. A animi vel placeat.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between ">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWPPJeKqMFiZdty1MgpNIUzPE0NYsz0Y0NA&s"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%]">
                        <h4 className="text-[16px]">Kalpesh Hire</h4>
                        <h5 className="text-[13px] mb-0">2014-12-23</h5>
                        <p className="!mt-0 mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. A animi vel placeat.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between ">
                    <div className="info w-[60%] flex items-center gap-3 ">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWPPJeKqMFiZdty1MgpNIUzPE0NYsz0Y0NA&s"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%]">
                        <h4 className="text-[16px]">Kalpesh Hire</h4>
                        <h5 className="text-[13px] mb-0">2014-12-23</h5>
                        <p className="!mt-0 mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. A animi vel placeat.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form className="w-full mt-5">
                    <TextField id="outlined-multiline-flexible"
                    label="Write a review...."
                    className="w-full"
                    multiline
                    rows={5}
                    />
                    <br /><br />
                    <Rating name="size-small" defaultValue={4}/>

                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
          <ProductSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
