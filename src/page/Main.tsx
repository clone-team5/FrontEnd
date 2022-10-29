import Carousel from "../components/Carousel";
import BrandFocus from "../components/BrandFocus";
import Showwindow from "../components/Showwindow";

const Main = () => {
  return (
    <div>
      <Carousel
        pictures={[
          {
            urls: "https://kream-phinf.pstatic.net/MjAyMjEwMjhfMjQ4/MDAxNjY2OTQ1ODIwMTkz.6yLYh2vFuhkR_8XOzOAjDbj3aud5CyT8iU3ZKKKaWq0g.U68sTnIEIcWJi728e3K6gcJXTP5J6hUiPi6owYvN-FIg.JPEG/a_d18fed90b3d04341a2644b17b7aa5ca9.jpg?type=m_2560",
            color: "bg-[#445978]",
          },
          {
            urls: "https://kream-phinf.pstatic.net/MjAyMjEwMjZfMTMx/MDAxNjY2Nzc0ODg0OTYx.1B7e-zJUcT7RWU1NyUwE3KLyOMCrMXrnN5Nc26B1X4gg.JbfxOScCqOsHBfCtkmkk_tdtGVwQuvX9Aot5aNuruAMg.JPEG/a_b834a0ef56a042818856dc8c790b338f.jpg?type=m_2560",
            color: "bg-[#d1d9e3]",
          },
          {
            urls: "https://kream-phinf.pstatic.net/MjAyMjEwMjVfMjk2/MDAxNjY2Njc0MTg4MjUz.267Afo45qoCUpMlpkDM5vLHET2lPeSP_SY4aw_KpW4sg.y2IA_VGtRgeh6Rp1pM0Y0TYUI2rRwZCw-fhPFvhy_xwg.JPEG/a_4e3ba081491a4d4bb483cb13b0471b73.jpg?type=m_2560",
            color: "bg-[#f3edf1]",
          },
          {
            urls: "https://kream-phinf.pstatic.net/MjAyMjEwMjBfMjI5/MDAxNjY2MjUxMjc3NjMy.RrbrrjlBMoQ82LIFw2Blx-qkgzbWbtqR8GLTo7CKC5sg.BkCmaZdBclZG50Sn1EbfTDLst5egSkshai1ARzzoCOUg.JPEG/a_3a2ad54b27cf49c2ac3fa6d30b0a5730.jpg?type=m_2560",
            color: "bg-[#e7dbc5]",
          },
          {
            urls: "https://kream-phinf.pstatic.net/MjAyMjA5MzBfMTgw/MDAxNjY0NTI0NDA2Mzg3.SeU4s7DVMNLbszQ05gi7FcHkm9Z31qsZHPINe_1uSikg.Pzp2bbPJnflzKQah0pyWw5JmtnHqKJbGY8xiZMEyvawg.JPEG/a_265a70b1e7c248a3b206da8d1e7d2326.jpg?type=m_2560",
            color: "bg-[#f9f9f9]",
          },
        ]}
      />
      <BrandFocus />
      <Showwindow />
    </div>
  );
};

export default Main;
