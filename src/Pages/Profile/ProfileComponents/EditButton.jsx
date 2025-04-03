import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdEdit } from 'react-icons/md';

const EditButton = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: user?.displayName || '',
      phone: user?.phone || '',
      address: user?.address || '',
      email: user?.email || ''
    }
  });

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.patch(`/users/${user?.email}`, data);
      if (res.data.modifiedCount > 0) {
        toast.success('Profile updated successfully');
        refetch();
        setIsOpen(false);
      }
    } catch (error) {
      toast.error('Failed to update profile');
      console.error(error);
    }
  };

  return (
    <>
      {/* Modal toggle button - Add this to your profile pages */}
      <button
        onClick={() => setIsOpen(true)}
        className="ezy-button-primary mt-8"
      >
        <MdEdit className="mr-2" />
        Edit Profile
      </button>

      {/* DaisyUI Modal */}
      <dialog open={isOpen} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Profile</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="input input-bordered w-full"
              />
              {errors.name && (
                <span className="text-error text-sm">{errors.name.message}</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                disabled
                {...register('email')}
                className="input input-bordered w-full bg-gray-100"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                {...register('address')}
                className="input input-bordered w-full"
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setIsOpen(false);
                }}
                className="btn btn-ghost"
              >
                Close
              </button>
              <button type="submit" className="ezy-button-primary-sm">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default EditButton;