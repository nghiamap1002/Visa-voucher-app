import { Controller } from "react-hook-form";

export const Infomation = ({ onSend, control, disabled }) => {
    return (
        <div className="flex items-center justify-center w-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-screen">

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2 className="text-2xl font-bold mb-6 text-black">Tiktok ID </h2>
                    <div>
                        <Controller
                            control={control}
                            name="tiktokID"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <input
                                        onChange={field.onChange}
                                        placeholder="Tiktok id"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {error?.message &&
                                        <div className="text-sm">{error.message}</div>
                                    }
                                </>
                            )
                            }
                        />
                    </div>
                </div>

                <form>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First name
                                </label>
                                <Controller
                                    control={control}
                                    name="firstName"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <input
                                                onChange={field.onChange}
                                                type="text"
                                                placeholder="First"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {error?.message &&
                                                <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                            }
                                        </>
                                    )}
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last name
                                </label>
                                <Controller
                                    control={control}
                                    name="lastName"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <input
                                                onChange={field.onChange}
                                                type="text"
                                                placeholder="Last"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {error?.message &&
                                                <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                            }
                                        </>
                                    )}
                                />

                            </div>
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone
                            </label>
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <input
                                            onChange={field.onChange}
                                            placeholder="### ### ####"
                                            type="number"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {error?.message &&
                                            <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                        }
                                    </>
                                )}
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <input
                                            onChange={field.onChange}
                                            placeholder="email"
                                            type="text"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />

                                        {error?.message &&
                                            <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                        }
                                    </>
                                )
                                }
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <Controller
                                    control={control}
                                    name="address"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <input
                                                onChange={field.onChange}
                                                placeholder="Street Address"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />

                                            {error?.message &&
                                                <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                            }
                                        </>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="address2"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <input
                                                onChange={field.onChange}
                                                placeholder="Street Address Line 2"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {error?.message &&
                                                <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                            }
                                        </>
                                    )}
                                />

                                <div style={{ display: 'flex', gap: 10 }}>
                                    <Controller
                                        control={control}
                                        name="city"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <input
                                                    onChange={field.onChange}
                                                    placeholder="City"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {error?.message &&
                                                    <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                                }
                                            </>
                                        )}
                                    />

                                    <Controller
                                        control={control}
                                        name="country"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <input
                                                    onChange={field.onChange}
                                                    placeholder="Region"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {error?.message &&
                                                    <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                                }
                                            </>
                                        )}
                                    />
                                </div>

                                <div style={{ display: 'flex', gap: 10 }}>
                                    <Controller
                                        control={control}
                                        name="zipcode"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <input
                                                    onChange={field.onChange}
                                                    placeholder="Postal / Zip code"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                                {error?.message &&
                                                    <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                                }
                                            </>
                                        )}
                                    />


                                    <Controller
                                        control={control}
                                        name="state"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <select
                                                    onChange={field.onChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option defaultValue='state'>State</option>
                                                    <option value='united' >United States</option>
                                                    <option value='vietnam' >VietNam</option>
                                                    <option value='indonesia' >Indonesia</option>
                                                </select>
                                                {error?.message &&
                                                    <div className="text-sm" style={{ color: 'red' }}>{error.message}</div>
                                                }
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button onClick={onSend} disabled={disabled}>Send</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};