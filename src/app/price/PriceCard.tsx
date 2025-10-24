"use client";
import Input from "../components/BaseComponents/Input";
import CheckIcon from "../components/Icons/CheckIcon";
const PriceCard = () => {
  return (
    <div className=" py-[5rem] space-y-[5rem]">
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
                  <CheckIcon />
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
                <Input placeholder="숫자만 입력" label="일" id="inputpriece1" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon />
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
                <Input placeholder="숫자만 입력" label="일" id="inputpriece2" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon />
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
                <Input placeholder="숫자만 입력" label="일" id="inputpriece3" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon />
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
                <Input placeholder="숫자만 입력" label="일" id="inputpriece4" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon />
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
                <Input placeholder="숫자만 입력" label="일" id="inputpriece5" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon />
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
                <Input placeholder="숫자만 입력" label="일" id="inputpriece6" />
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
              {/* //I will display valu here */}
              0원
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              기술비 예상(인건비의 30%)
            </div>
            <div className="text-[1.25rem] font-bold text-white">
              {/* //I will display valu here */}
              0원
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              총계(부가세 별도)
            </div>
            <div className="text-[1.25rem] font-bold text-white">
              {/* //I will display valu here */}
              0원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
