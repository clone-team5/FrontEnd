import React from "react";

function BrandFocus() {
  return (
    <div className="flex w-screen h-[479px]">
      <div className="flex-row">
        <div className="text-[20px] font-semibold tracking-tighter">
          Brand Focus
        </div>
        <div className="text-[12px] text-gray-400">추천 브랜드</div>
      </div>
      <div className="h-[416px]">
        {BrandArray.map((item) => {
          <div>
            {item.ImageUrl}
            {item.name}
          </div>;
        })}
      </div>
    </div>
  );
}

export default BrandFocus;

interface Brand {
  name: string;
  ImageUrl: string;
}

const BrandArray: Array<Brand> = [
  {
    name: "애플",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTQ4/MDAxNjYxMTMyMzQ2MTQ3.57ah96yqHitKYQNruBLxBS901N1LfgNg8TKpEfGSGR8g.oJWA3A7Ng2OU83DHm3WqrIOZduVPdFfPVPfWAqB4jd0g.JPEG/a_9f657db2a3884f86a5ad98c8017d6537.jpg_webp",
  },
  {
    name: "루이비통",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA5MzBfMTE3/MDAxNjY0NTM2NDQzOTY1.fSCxmH0HmxenIoi4pXlZI5LXGheCABvLnT4PzUt7Vukg.JT-Gg69GaMkOqrdvh4CJi1uynYcjB3A-oy0I5RQpbMcg.JPEG/a_0a447621d64345599c5ff11d1466a4c5.jpg_webp",
  },
  {
    name: "강혁",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjEwMDdfMjI1/MDAxNjY1MTM0ODc3MTA0.A2KTSd_P8lKFY3FmmLKtuAj4Ow5qiDzW0lUqBL4WIxsg.2PzErgC4HI09cyyG8hL0xmQUddnNSA9tSPdasu_xV8wg.JPEG/a_fe3fd603e5604ac6bc904476864d706b.jpg_webp",
  },
  {
    name: "우영미",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTIy/MDAxNjYxMTMyNTE0ODk3.1MmBTlJmvqRzE1zCNC7RccFGlzjSeU8ZJDRiwaraE9cg.jwXESgD2cUNrjWKhdm5KC63uMEC5jQGL-nc4PIJ94QAg.JPEG/a_c99ccda34c8b4e218b4c4721db5ac476.jpg_webp",
  },
  {
    name: "에르메스",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMjYz/MDAxNjYxMTMyMjczNjkz.0k9rKUtR-nt95SmpMEeARI8GgQNUBowBoonJz_Par-sg.62zpHkqPIpO2yAb7iFe5n4t-o8HXP7m14BqiQnolbD0g.JPEG/a_40a13dde8e904b948fd024c514f5c0ab.jpg_webp",
  },
  {
    name: "발렌시아가",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfODYg/MDAxNjYxMTMyNDk4Njky.PCV4xjVti0lCwGtAZN3FodKL9nE5_I5l5gR8xe_7KPgg.LDmzaPnQ2TQhmnrdyAhtVqK3yOYQ8eMvPCioiiSyi_Ag.JPEG/a_2b6a2ac11f4c40ad9225ab43cfbbcbcf.jpg_webp",
  },
  {
    name: "아크테릭스",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA5MzBfNTUg/MDAxNjY0NTM2NzM0NTIz.KFaQp9HDcETLZZKMgITasYc-JZIj7WyMyYeMtKfkF6Mg.pyvkrZFPNkSP8tIoQuDzsG8E1DWpUg7LYp1cdqsxxqIg.JPEG/a_3881b1ae706047d791cb9eb540fb639a.jpg_webp",
  },
  {
    name: "렉토",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjEwMDdfMjA0/MDAxNjY1MTM0ODM2NDQ4.WiZqgw5QwKqDB69LekX2s5PIkxwr6nkb1cLQ0UBy9Jwg.eHbkyujtHVIDzKrBWu35lXtl-9kiY9YDA3RAGQPs16og.JPEG/a_ab332a20fbff4168a2f85f11c97a8f88.jpg_webp",
  },
  {
    name: "샤넬",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTI2/MDAxNjYxMTMyMjY0MDQ3.5lQaaA7L8VQ70H-A239Zfl-W265UUs3BX_KogTVTfg0g.7AvkIA1S0_T3Pt9JQrrCzebnqe52XLN5ksk34NffK1Ug.JPEG/a_d46f1d11219c4aff82bf371df1f2902c.jpg_webp",
  },
  {
    name: "디올",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTAz/MDAxNjYxMTMyMzA5NzMx.3_6H5Bw8Op9rSpFZlqelXF-N5qerbWnSqNjjLd5w9nEg.uK1eMkcPs2DUzwHdIdjBFjz2t8f_JeHKfm3lNfn7t5Ug.JPEG/a_4defacefcceb4808a1b66df22219d02e.jpg_webp",
  },
  {
    name: "스톤 아일랜드",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMyAg/MDAxNjYxMTMyNDg2MDAy.sGW1BWQdpd2olupBqUmmb4cdKSKQoBQBUPWoaT_wxZUg.VkvY4tbMJyQNXJGuTNGJHGCUga_b1lvyNE7XA2PPWk0g.JPEG/a_2be3f8f62a5c4dcfb5f9ccdcd192701f.jpg_webp",
  },
  {
    name: "롤렉스",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTAg/MDAxNjYxMTMyMzIxMjAx.FZgEJ0P1zyF8-5gu89wV8yLfiLZB5wDrqSIcki475W0g.9Sv3hqnkJfg2JzQktMEwTePvSxa72yxbTf_cUFyNUjog.JPEG/a_ed65aea06d1048bb952dda6682d7528d.jpg_webp",
  },
  ,
  {
    name: "보테가 베네타",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTgz/MDAxNjYxMTMyNDEzOTUy.6wL1GyW6WQfP4hAxS8gNPFoQbFxcNsLglb5X8cMe5u0g.9I2T4Z6nkclU1BaQOtD6w3kDqboaZtLZz0etUZa8BkEg.JPEG/a_83edb8576a1b4b499403f0780e921274.jpg_webp",
  },
  ,
  {
    name: "셀린느",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMjkg/MDAxNjYxMTMyNDI1MTUz.2GdDlqWvJP1B-LN1xomugypiDHyFUCNJy1HJcGRY2TEg.3CelTgH9Nuotchjwt-dLMxJ7qrxQqJPE-uB-UyNosYkg.JPEG/a_cf6eb629ff3b4ceeac1c0226a19dc972.jpg_webp",
  },
  ,
  {
    name: "프라다",
    ImageUrl:
      "https://kream-phinf.pstatic.net/MjAyMjA4MjJfMjUy/MDAxNjYxMTMyNDYyOTQ1.HQuxYR5B1Fp-f338ih9_WjPOWixfAtZXV5lBLN1SCBQg.F3A1zajKzLfR7UV2oJgaVcSUDUCUz-InuMlfBRhFrPIg.JPEG/a_9661d07bb9784440bfbdd008321761ef.jpg_webp",
  },
];
