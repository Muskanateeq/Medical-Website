import Image from "next/image"
import { Facebook, Twitter, Linkedin, Heart, } from "lucide-react"

const DoctorsDetails = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* First row - 3 doctors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Doctor 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/dermatologist.jpeg"
                alt="Dr. Catherine Castillo"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 flex gap-2">
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 p-2">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm font-medium mb-1">Dermatologist</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Catherine Castillo</h3>
              <p className="text-gray-600 text-sm mb-4">
                Specializes in diagnosing and treating skin, hair, and nail conditions, addressing a variety of issues
                from acne to skin cancer.
              </p>
              <div className="border-t pt-4">
                <a href="#" className="text-blue-500 font-medium text-sm">
                  Biography
                </a>
              </div>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/orthodontics.jpeg"
                alt="Dr. Alexander Burns"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 flex gap-2">
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 p-2">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm font-medium mb-1">Orthodontist</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Alexander Burns</h3>
              <p className="text-gray-600 text-sm mb-4">
                Specializes in the prevention, and treatment of dental and facial irregularities. They focus on
                correcting misaligned teeth and jaws.
              </p>
              <div className="border-t pt-4">
                <a href="#" className="text-blue-500 font-medium text-sm">
                  Biography
                </a>
              </div>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/primary doctor.jpeg"
                alt="Dr. Evan Taller"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 flex gap-2">
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 p-2">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm font-medium mb-1">Primary Health Care</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Evan Taller</h3>
              <p className="text-gray-600 text-sm mb-4">
                Provides a wide range of services, including preventive care, diagnosis, treatment, and health
                education.
              </p>
              <div className="border-t pt-4">
                <a href="#" className="text-blue-500 font-medium text-sm">
                  Biography
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second row - 2 doctors with space on sides */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Doctor 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src="/pediatrician.jpg"
                  alt="Dr. Jamie Brannon"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-2 flex gap-2">
                  <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </a>
                  <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                  <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm font-medium mb-1">Pediatrician</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Jamie Brannon</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Specializes in the medical care of infants, children, and adolescents. They diagnose and treat a wide
                  range of childhood illnesses.
                </p>
                <div className="border-t pt-4">
                  <a href="#" className="text-blue-500 font-medium text-sm">
                    Biography
                  </a>
                </div>
              </div>
            </div>

            {/* Doctor 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src="/opthamology.jpeg"
                  alt="Dr. Belly Doe"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-2 flex gap-2">
                  <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </a>
                  <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                  <a href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm font-medium mb-1">Ophthalmology</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Belly Doe</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Specializes in the diagnosis, treatment, and prevention of eye disorders and diseases. Provides
                  comprehensive eye care.
                </p>
                <div className="border-t pt-4">
                  <a href="#" className="text-blue-500 font-medium text-sm">
                    Biography
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorsDetails


