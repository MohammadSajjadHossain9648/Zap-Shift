import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import calculateParcelCost from '../../utilities/calculateParcelCost';

const Pricing = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm()

    const warehouseData = useLoaderData();
    const uniqueRegions = [...new Set(warehouseData.map(item => item.region))];

    const districtsByRegions = (region) => {
        const regionData = warehouseData.filter(data => data.region === region);
        const districts = regionData.map(data => data.district);
        return districts;
    }
    const sender_Region = useWatch({ control, name: 'senderRegion' });
    const receiver_Region = useWatch({ control, name: 'receiverRegion' });

    const [cost, setCost] = useState(0);
    const handlePricing = (data) => {
        const price = calculateParcelCost(data);
        setCost(price);
    }

    return (
        <div className='bg-white rounded-2xl my-5 p-5 md:p-15'>
            <div className="lg:w-1/2">
                <h1 className="title3">Pricing Calculator</h1>
                <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div className="my-5 md:my-10">
                <h1 className="title3 py-5">Pricing Structure</h1>
                <div className="overflow-x-auto">
                    <table className="table text-xs sm:text-sm md:text-base text-center">
                        <thead>
                            <tr className="bg-green_bg text-white">
                                <th>Parcel Type</th>
                                <th>Weight</th>
                                <th>Within District</th>
                                <th>
                                    Outside City/District
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Document</td>
                                <td>Any</td>
                                <td>৳60</td>
                                <td>৳80</td>
                            </tr>

                            <tr>
                                <td>Non-Document</td>
                                <td>Up to 3kg</td>
                                <td>৳110</td>
                                <td>৳150</td>
                            </tr>

                            <tr>
                                <td>Non-Document</td>
                                <td>&gt;3kg</td>
                                <td>+৳40/kg</td>
                                <td>
                                    +৳40/kg + ৳40 extra
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h1 className='title text-center border-t border-solid border-[#CBD5E1] py-10 mt-10'>Calculate Your Cost</h1>
            <form onSubmit={handleSubmit(handlePricing)} className='lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-5'>

                <div className="">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend form_subtitle">Parcel Type</legend>
                        <select defaultValue="" className="select w-full"
                            {...register('parcelType', { required: true })}
                        >
                            <option value="" disabled={true}>Select Parcel Type</option>
                            <option value="document">Document</option>
                            <option value="non-document">Non-Document</option>
                        </select>
                        {errors.parcelType?.type === "required" && (
                            <p role="alert" className='text-red-400'>Parcel Type is required</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label form_subtitle">Parcel Weight (KG)</label>
                        <input type="text" className="input w-full placeholder:text-placeholder_color" placeholder="Parcel Weight (KG)"
                            {...register('ParcelWeight', { required: true })}
                        />
                        {errors.ParcelWeight?.type === "required" && (
                            <p role="alert" className='text-red-400'>ParcelWeight is required</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend form_subtitle">Your Region</legend>
                        <select defaultValue="" className="select w-full"
                            {...register('senderRegion', { required: true })}
                        >
                            <option value="" disabled={true}>Select your Region</option>
                            {
                                uniqueRegions.map((data, index) => (
                                    <option key={index} value={data}>{data}</option>
                                ))
                            }
                        </select>
                        {errors.senderRegion?.type === "required" && (
                            <p role="alert" className='text-red-400'>Sender Region is required</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend form_subtitle">Your District</legend>
                        <select defaultValue="" className="select w-full"
                            {...register('senderDistrict', { required: true })}
                        >
                            <option value="" disabled={true}>Select your District</option>
                            {
                                districtsByRegions(sender_Region).map((data, index) => (
                                    <option key={index} value={data}>{data}</option>
                                ))
                            }
                        </select>
                        {errors.senderDistrict?.type === "required" && (
                            <p role="alert" className='text-red-400'>Sender District is required</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend form_subtitle">Receiver Region</legend>
                        <select defaultValue="" className="select w-full"
                            {...register('receiverRegion', { required: true })}
                        >
                            <option value="" disabled={true}>Select your Region</option>
                            {
                                uniqueRegions.map((data, index) => (
                                    <option key={index} value={data}>{data}</option>
                                ))
                            }
                        </select>
                        {errors.receiverRegion?.type === "required" && (
                            <p role="alert" className='text-red-400'>Receiver Region is required</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend form_subtitle">Receiver District</legend>
                        <select defaultValue="" className="select w-full"
                            {...register('receiverDistrict', { required: true })}
                        >
                            <option value="" disabled={true}>Select Receiver District</option>
                            {
                                districtsByRegions(receiver_Region).map((data, index) => (
                                    <option key={index} value={data}>{data}</option>
                                ))
                            }
                        </select>
                        {errors.receiverDistrict?.type === "required" && (
                            <p role="alert" className='text-red-400'>Receiver District is required</p>
                        )}
                    </fieldset>
                    <div className="flex pt-5 gap-5">
                        <button className='btn border-reset_btn text-reset_btn bg-reset_btn_bg px-8'
                            onClick={() => {
                                reset();
                                setCost(0);
                            }}
                        >Reset
                        </button>
                        <button className='btn form_btn flex-1'>Calculate</button>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className='text-3xl font-extrabold text-primary_black text-center'>Parcel Cost <br /> ৳{cost}</h2>
                </div>
            </form>
        </div>
    );
};

export default Pricing;