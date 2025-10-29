"use client";
import { useMemo, useState } from "react";
import Input from "../components/BaseComponents/Input";
import CheckIcon from "../components/Icons/CheckIcon";
// import { showToast } from "../components/toastComponents/showToast";
const PriceCard = () => {
  const rates = {
    planner: 300000,
    designer: 300000,
    webDev: 120000,
    mobileDev: 120000,
    backendDev: 120000,
    infraDev: 350000,
  };

  const [days, setDays] = useState({
    planner: "",
    designer: "",
    webDev: "",
    mobileDev: "",
    backendDev: "",
    infraDev: "",
  });
  const handleDaysChange = (role: keyof typeof days, value: string) => {
    // Allow only digits
    const numericValue = value.replace(/[^0-9]/g, "");
    setDays((prev) => ({
      ...prev,
      [role]: numericValue,
    }));
  };
  // Compute costs using useMemo for performance
  const { laborCost, techFee, total } = useMemo(() => {
    const labor =
      (Number(days.planner) || 0) * rates.planner +
      (Number(days.designer) || 0) * rates.designer +
      (Number(days.webDev) || 0) * rates.webDev +
      (Number(days.mobileDev) || 0) * rates.mobileDev +
      (Number(days.backendDev) || 0) * rates.backendDev +
      (Number(days.infraDev) || 0) * rates.infraDev;

    const tech = Math.round(labor * 0.3);
    return {
      laborCost: labor.toLocaleString(),
      techFee: tech.toLocaleString(),
      total: (labor + tech).toLocaleString(),
    };
  }, [days]);
  // const showText = () => {
  //   console.log("I am runing");

  //   showToast(
  //     "error",
  //     <div>
  //       <div>견적 발송에 실패했습니다.</div>
  //       <div>steven@sweech.io로 문의해주세요.</div>

  //       {/* <div> 견적 문의가 발송되었습니다. 영업일 기준 2일 내</div>
  //       <div>담당자가 연락드릴 예정입니다.</div> */}
  //     </div>
  //   );
  // };
  return (
    <div className=" py-[5rem] space-y-[5rem] max-w-[57.1875rem] mx-auto ">
      <div className="space-y-[1rem]">
        <div className="text-5 font-normal text-white text-center">
          <div>서비스 금액은 합리적이게</div>
          <div>퀄리티는 최상으로</div>
        </div>
        <div className="text-white text-[2rem] font-bold text-center">
          <div> 대기업 프로젝트에 참여한 인력을</div>
          <div className="text-primary">기간제로, 합리적인 금액으로</div>
          <div>이용할 수 있어요.</div>
        </div>
      </div>
      <div className="space-y-[3.25rem]">
        <div className="space-y-[1rem]">
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.planner !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    기획자
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    300,000원 / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                각 상황별 기획을 꼼꼼하게 봐드려요.
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                300,000원 / 일
              </div>
              <div>
                <Input
                  placeholder="숫자만 입력"
                  label="일"
                  id="inputpriece1"
                  value={days.planner}
                  onChange={(value) =>
                    handleDaysChange("planner", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.designer !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    디자이너
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    300,000원 / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                국내 유명 대기업 프로젝트를 진행한 디자이너가 참여해요.
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                300,000원 / 일
              </div>
              <div>
                <Input
                  placeholder="숫자만 입력"
                  label="일"
                  id="inputpriece2"
                  value={days.designer}
                  onChange={(value) =>
                    handleDaysChange("designer", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.webDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    웹(홈페이지) 개발자
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    120,000원~ / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                7년차 + 해외 법인 개발자와 PM이 참여해요.
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                120,000원~ / 일
              </div>
              <div>
                <Input
                  placeholder="숫자만 입력"
                  label="일"
                  id="inputpriece3"
                  value={days.webDev}
                  onChange={(value) =>
                    handleDaysChange("webDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.mobileDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    iOS/Android 앱 개발자
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    120,000원~ / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                7년차 + 해외 법인 개발자와 PM이 참여해요.
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                120,000원~ / 일
              </div>
              <div>
                <Input
                  placeholder="숫자만 입력"
                  label="일"
                  id="inputpriece4"
                  value={days.mobileDev}
                  onChange={(value) =>
                    handleDaysChange("mobileDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.backendDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    백엔드 개발자
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    120,000원~ / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                7년차 + 해외 법인 개발자와 PM이 참여해요.
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                120,000원~ / 일
              </div>
              <div>
                <Input
                  placeholder="숫자만 입력"
                  label="일"
                  id="inputpriece5"
                  value={days.backendDev}
                  onChange={(value) =>
                    handleDaysChange("backendDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.infraDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    인프라(서버) 개발자
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    350,000원 / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                Kubernetes 서버 기술을 활용해서 복잡한 대규모 시스템을
                운영해야할 경우 선택해주세요.
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                350,000원 / 일
              </div>
              <div>
                <Input
                  placeholder="숫자만 입력"
                  label="일"
                  id="inputpriece6"
                  value={days.infraDev}
                  onChange={(value) =>
                    handleDaysChange("infraDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-[1.25rem]">
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              인건비 예상
            </div>
            <div className="text-[1.25rem] font-bold text-white">
              {laborCost}원
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              기술비 예상(인건비의 30%)
            </div>
            <div className="text-[1.25rem] font-bold text-white">
              {/* //I will display valu here */}
              {techFee}원
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              총계(부가세 별도)
            </div>
            <div className="text-[1.25rem] font-bold text-white">
              {/* //I will display valu here */}
              {total}원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
