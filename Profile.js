import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailItem = ({ label, value }) => (
  <div className="border-b border-gray-100 pb-2">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-gray-900">{value}</dd>
  </div>
);

const Profile = () => {
  const location = useLocation();
  const formData = location.state || {};

  const photoUrl = formData.photo ? URL.createObjectURL(formData.photo) : "";
  const resumeUrl = formData.resume ? URL.createObjectURL(formData.resume) : "";

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Professor Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="aspect-square overflow-hidden rounded-lg border-2 border-gray-200">
                {photoUrl && (
                  <img 
                    src={photoUrl} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{formData.name}</h2>
                <p className="text-lg text-gray-600">{formData.position} at {formData.company}</p>
              </div>

              <div className="space-y-2">
                <DetailItem label="Email" value={formData.email} />
                <DetailItem label="Phone" value={formData.phone} />
                <DetailItem label="Experience" value={formData.experience} />
                <DetailItem label="Skills" value={formData.skill} />
              </div>

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  download="resume.pdf"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;