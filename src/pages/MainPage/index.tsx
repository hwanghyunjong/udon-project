import React from "react";

import "./index.css";
import PublicSVG from "../../components/publicSVG/public_svg";
import icons from "../../components/icons/index";
import { relative } from "path";

const MainPage = () => {
    return (
        <div className="main-page">
            {/* 🚀 Main Page Header */}
            <header className="header">
                <div className="logo">
                    <PublicSVG svg_tag={icons.homelogo} classStyle="" />
                </div>

                <div className="container">
                    {/* ⭐ 첫번째 항목들 */}
                    <div className="first-item">
                        <PublicSVG
                            svg_tag={icons.menubar}
                            classStyle="flex-div"
                        />
                        <span>중고거래</span>
                        <span>동네업체</span>
                    </div>

                    {/* ⭐ 검색 항목 */}
                    <div className="center-item">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="통합검색(@상품명, @지역명)"
                            />

                            <PublicSVG
                                svg_tag={icons.search_icon}
                                classStyle="flex-div"
                            />
                        </div>
                    </div>

                    <div></div>
                </div>
            </header>

            {/* 🚀 Main Page Body */}
            <div></div>
        </div>
    );
};

export default MainPage;
