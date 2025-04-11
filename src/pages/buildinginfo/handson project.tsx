import Image from "next/image";

export default function HandsOnProject() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Left Side - Text */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Hands-on Project
          </h2>
          <p className="text-gray-600">
            Work on real-world challenges to gain practical experience and boost your skills.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="p-4">
          <Image
            src="/courses/hands on.jpg"// Replace with your actual image path
            alt="Hands-on Project"
            width={500}
            height={300}
            className="rounded-xl object-cover w-96"
          />
        </div>
      </div>
    </div>
  );
}
