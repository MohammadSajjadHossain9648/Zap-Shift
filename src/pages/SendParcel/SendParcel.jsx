import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../customHooks/useAuth';
import useAxiosSecure from '../../customHooks/useAxiosSecure';

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [toggle, setToggle] = useState(true);
    const warehouseData = useLoaderData();
    const uniqueRegions = [...new Set(warehouseData.map(item => item.region))];

    const districtsByRegions = (region) => {
        const regionData = warehouseData.filter(data => data.region === region);
        const districts = regionData.map(data => data.district);
        return districts;
    }
    const sender_Region = useWatch({ control, name: 'senderRegion' });
    const receiver_Region = useWatch({ control, name: 'receiverRegion' });


    const handleSendParcel = (data) => {
        console.log(data);

        // calculate parcel cost
        const parcelWeight = parseFloat(data.ParcelWeight);
        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? (extraWeight * 40) : ((extraWeight * 40) + 40);
                cost = minCharge + extraCharge;
            }
        }
        console.log(cost);

        // confirm user to send parcel by using sweetalert2
        Swal.fire({
            title: "Confirm Parcel",
            text: `Your parcel delivery charge is ৳${price}. Do you agree to pay this amount?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Agree & Continue",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#caeb66",
        }).then((result) => {
            if (result.isConfirmed) {
                // save the parcel info to the database
                axiosSecure.post('/parcels', data)
                    .then(res => {
                        console.log('after saving data in database: ', res.data);
                    })

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div className='bg-white rounded-2xl my-5 p-5 md:p-15'>
            <h1 className="title3 pb-5">Send A Parcel</h1>

            <form onSubmit={handleSubmit(handleSendParcel)}>
                <legend className='text-2xl title py-5'>Enter your parcel details</legend>
                <fieldset className="fieldset">
                    <div className="border-t border-b border-solid border-[#CBD5E1] py-5">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-12">
                            <label class="mr-2 text-sm text-green_bg font-semibold flex items-center gap-2">
                                <input type="radio" value="document" onClick={() => setToggle(!toggle)} checked={toggle}
                                    className={`w-3 h-3 rounded-full ring-3 hover:ring-radio hover:border-radio appearance-none ${(toggle) ? 'border-radio border ring-radio' : ''}`}
                                    {...register('parcelType')}
                                />
                                Document
                            </label>
                            <label class="mr-2 text-sm text-green_bg font-semibold flex items-center gap-2">
                                <input type="radio" value="non-document" onClick={() => setToggle(!toggle)}
                                    className={`w-3 h-3 rounded-full ring-3 hover:ring-radio hover:border-radio appearance-none ${(toggle) ? '' : 'border-radio border ring-radio'}`}
                                    {...register('parcelType')}
                                />
                                Non-Document
                            </label>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Parcel Name</label>
                                <input type="text" className="input w-full placeholder:text-placeholder_color" placeholder="Parcel Name"
                                    {...register('ParcelName', { required: true })}
                                />
                                {errors.ParcelName?.type === "required" && (
                                    <p role="alert" className='text-red-400'>ParcelName is required</p>
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
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                        {/* Sender Details */}
                        <div>
                            <legend className='title text-lg pb-5'>Sender Details</legend>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Sender Name</label>
                                <input type="text" className="input w-full placeholder:text-placeholder_color" placeholder="Sender Name"
                                    defaultValue={user?.displayName}
                                    {...register('senderName', { required: true })}
                                />
                                {errors.senderName?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Sender Name is required</p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Sender Email</label>
                                <input type="email" className="input w-full placeholder:text-placeholder_color" placeholder="Sender Email"
                                    defaultValue={user?.email}
                                    {...register('senderEmail', { required: true })}
                                />
                                {errors.senderEmail?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Sender Email is required</p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Address</label>
                                <input type="text" className="input w-full placeholder:text-placeholder_color" placeholder="Address"
                                    {...register('senderAddress', { required: true })}
                                />
                                {errors.senderAddress?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Sender Address is required</p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Sender Phone No</label>
                                <input type="number" className="input w-full placeholder:text-placeholder_color" placeholder="Sender Phone No"
                                    {...register('senderPhoneNo', { required: true })}
                                />
                                {errors.senderPhoneNo?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Sender Phone No is required</p>
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
                                <label className="label form_subtitle">Pickup Instruction</label>
                                <textarea placeholder="Pickup Instruction" className="textarea textarea-sm w-full resize-none placeholder:text-placeholder_color"
                                    {...register('pickupInstruction', { required: true })}
                                ></textarea>
                                {errors.pickupInstruction?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Pickup Instruction is required</p>
                                )}
                            </fieldset>
                        </div>

                        {/* Receiver Details */}
                        <div>
                            <legend className='title text-lg pb-5'>Receiver Details</legend>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Receiver Name</label>
                                <input type="text" className="input w-full placeholder:text-placeholder_color" placeholder="Receiver Name"
                                    {...register('receiverName', { required: true })}
                                />
                                {errors.receiverName?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Receiver Name is required</p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Receiver Email</label>
                                <input type="email" className="input w-full placeholder:text-placeholder_color" placeholder="Sender Email"
                                    {...register('receiverEmail', { required: true })}
                                />
                                {errors.receiverEmail?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Receiver Email is required</p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Receiver Address</label>
                                <input type="text" className="input w-full placeholder:text-placeholder_color" placeholder="Address"
                                    {...register('receiverAddress', { required: true })}
                                />
                                {errors.receiverAddress?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Receiver Address is required</p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Receiver Contact No</label>
                                <input type="number" className="input w-full placeholder:text-placeholder_color" placeholder="Receiver Contact No"
                                    {...register('receiverContactNo', { required: true })}
                                />
                                {errors.receiverContactNo?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Receiver Contact No is required</p>
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
                            <fieldset className="fieldset">
                                <label className="label form_subtitle">Delivery Instruction</label>
                                <textarea placeholder="Delivery Instruction" className="textarea textarea-sm w-full resize-none placeholder:text-placeholder_color"
                                    {...register('deliveryInstruction', { required: true })}
                                ></textarea>
                                {errors.deliveryInstruction?.type === "required" && (
                                    <p role="alert" className='text-red-400'>Delivery Instruction is required</p>
                                )}
                            </fieldset>
                        </div>
                    </div>
                </fieldset>

                <p className="py-10">* PickUp Time 4pm-7pm Approx.</p>
                <button className='btn form_btn inline-block w-full md:w-1/2 lg:w-1/3'>Proceed to Confirm Booking</button>
            </form>

        </div>
    );
};

export default SendParcel;