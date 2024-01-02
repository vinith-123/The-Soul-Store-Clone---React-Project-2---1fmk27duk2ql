import VoucherDropDown from "../voucherDropDown";






export default function CoupenSection({setIsChecked}) {

    function handleChange(event) {

        setIsChecked(event.target.checked);
    }

    return (
        <div>
            <VoucherDropDown heading={"Apply Coupens"} />
            <VoucherDropDown heading={"Gift Vouchers"} />

            <div className="flex items-center justify-between border-[2px] border-[#f2f2f2] p-[15px]">
                <div className="flex items-center">
                    <div className="w-[20px]">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABPCAMAAAB23dO3AAAArlBMVEUAAAAQFBwRFx0SFh4Xe3sXeXkQgIAYenoXe3sVenoYeHgYenoYenoXe3sXenoYe3sWeXkXenoRFh0XenoQFx4YfHwQFRsSFhwYe3sYenoXe3sRFh0SFh0QFR0QEBARFx4RFh0UQkYQEBgYeHgXdHUVaGkRFx4WcXIRFh0RIikTU1UTOT4VWFsQFx4QFh0SFx4Ye3sVXV8TLTISFx0XcXITNDkSHyUVSEwUP0QVT1KLhP1RAAAAL3RSTlMAP8CAs0wQwO8wIIBgcM+gUPDwkHBAMJDg39CvoF8Q39CkIPvv6ODFsIh4079vUIzroGYAAAIkSURBVFjDpJRbioQwEAD7Q/IyGoMI6inq/qdbNwymHZalh6kfo9Jlv1A+JI7DweEnJ1/jBl6EKF+yBDpJzKT4h4uLkqNsU70OVtMQAL8m0cQAdZNGBmyNGe/GTPrxDOfd9xM2MeC5qDu/zH1qK9Reu7fJJsAnEbec2uYCqERtZSYVNCrbdfaqf1ANslUHZe67AIvcFNs0fQvStul12J/pW7YWeOtgSNd1fnTM6/TtMjlbnAPcY3ujWMtUxFbo0pRqsKPIRwPoIw1SYNTbuzuxkHj/7A75gKhcbGJj7LY+A6jalcWKB2bVX1fp6xaVy/4H9PmRK2t7tWJ16cIuQsnpbmOrPIfuspNKpXEM45KkAFssTeWT/McP+3S3giAQhGF4dpZuQEIPKv8yy374RjO1+7+xVgpC0jVC6MSHPd2Xgdn1lf6UnRPp2EoriXS/i0stFaBf1eTSVdYVBq18otiBRdHUefkcrLwXsGKiA5B62i6LdiKRtlmbmTYUAC6NMq9lQVYeoAkATRFTAM+xf8ccIJ4itgTWxMBKjdqLHJXNJgCWpPCNXOSGEanfzmdczfkp9r7suGS4HrMDhGxh/uaJh4SmxNrM9cKAGluAfZFEc+yxUcNGDRs1bNSwUcNGDRs1bNSwUcOGrGGyoP4EHID7wyJkGyYN04zorAiJk9dDkZXWR+9MK1DUQ2FGdaoSE17DjIyM8IxCiGP4XI+ZiSwgwwz3IwDQ0MNS7jXyDQAAAABJRU5ErkJggg==" 
                        alt="No Icon" />
                    </div>

                    <p className="ml-[10px] text-[13px] font-bold font-grey">
                        Gift Wrap (₹ 50)
                    </p>
                </div>

                <div>
                    <input type="checkbox" className="w-[1rem] h-[1rem] cursor-pointer" onChange={(e) => handleChange(e)} />
                </div>
                
            </div>
        </div>
    )
}