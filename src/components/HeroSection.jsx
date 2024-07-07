import React, { useState } from 'react';
import ReferralModal from './ReferralModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <a className="flex items-center justify-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {['Home', 'Refer & Earn', 'How it Works', 'Pricing', 'Contact'].map((item) => (
            <a key={item} className="text-sm font-medium hover:underline underline-offset-4" href="#">
              {item}
            </a>
          ))}
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-8 md:py-12 lg:py-24 xl:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 md:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl">
                    Refer & Earn
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    Invite your friends and earn rewards. Get started today!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    onClick={handleOpenModal}
                    className="whitespace-nowrap ring-offset-background focus-visible:ring-offset-2 bg-primary py-2 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Refer Now
                  </button>
                </div>
              </div>
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/referafriend-649077e63718b.jpg"
                width="550"
                height="550"
                alt="Refer & Earn"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-20 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-primary tracking-tighter sm:text-4xl md:text-5xl">How to Refer</h2>
            <p className="max-w-[700px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Refer your friends and earn rewards in 3 easy steps.
            </p>
          </div>
          <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { step: 1, title: 'Share Your Link', description: 'Copy your unique referral link and share it with your friends. ' },
              { step: 2, title: 'Earn Rewards', description: "When your friends sign up, you'll both earn rewards." },
              { step: 3, title: 'Track Your Progress', description: 'Monitor your referrals and earnings in your dashboard.' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-4">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <span className="text-3xl font-bold text-primary-foreground">{item.step}</span>
                  <div className="absolute -inset-1 rounded-full border-2 border-dashed border-primary animate-ping-slow"></div>
                  <div className="absolute -inset-1 rounded-full border-2 border-dashed border-primary animate-ping-slow delay-[0.5s]"></div>
                  <div className="absolute -inset-1 rounded-full border-2 border-dashed border-primary animate-ping-slow delay-[1s]"></div>
                </div>
                <h3 className="text-lg text-secondary font-bold">{item.title}</h3>
                <p className="text-primary text-center">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 py-4 min-[400px]:flex-row">
                  <button
                    onClick={handleOpenModal}
                    className="whitespace-nowrap ring-offset-background focus-visible:ring-offset-2 bg-primary py-2 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Refer Now
                  </button>
                </div>
        </div>
        
      </div>
    </section>
    <section className="w-full py-8 md:py-12 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6 bg-gradient-to-r from-primary to-secondary">
        <div className="flex flex-col items-center justify-center space-y-4 text-center ">
          <div className="space-y-2 md:py-12 lg:py-12">
            <h2 className="text-3xl font-bold tracking-tighter text- sm:text-5xl ">Benefits of Referral</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the advantages of our referral program.
            </p>
          </div>
        </div>
        <div className="mx-auto my-auto max-w-5xl py-12">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-primary-foreground text-primary">
                <th className="px-4 py-2">Benefit</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody className='bg-primary'>
              {[
                { benefit: 'Bonus Points', description: 'Earn bonus points for every successful referral.' },
                { benefit: 'Discounts', description: 'Get exclusive discounts for referring friends.' },
                { benefit: 'Early Access', description: 'Gain early access to new features and updates.' },
                { benefit: 'VIP Support', description: 'Enjoy priority customer support as a valued referrer.' },
                { benefit: 'Gift Cards', description: 'Receive gift cards for referring multiple friends.' },
              ].map((item, index) => (
                <tr key={index} className="border-t border-muted-foreground">
                  <td className="px-4 py-2">{item.benefit}</td>
                  <td className="px-4 py-2">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or want to learn more? Contact us today.
                </p>
              </div>
              <button className="whitespace-nowrap ring-offset-background focus-visible:ring-offset-2 bg-primary py-2 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {['Terms of Service', 'Privacy'].map((item) => (
            <a key={item} className="text-xs hover:underline underline-offset-4" href="#">
              {item}
            </a>
          ))}
        </nav>
      </footer>

      {isModalOpen && <ReferralModal onClose={handleCloseModal} />}
    </div>
  );
};

export default HeroSection;




//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
//         <a className="flex items-center justify-center" href="#">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-6 w-6"
//           >
//             <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
//           </svg>
//           <span className="sr-only">Acme Inc</span>
//         </a>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           {['Home', 'Refer & Earn', 'How it Works', 'Pricing', 'Contact'].map((item) => (
//             <a key={item} className="text-sm font-medium hover:underline underline-offset-4" href="#">
//               {item}
//             </a>
//           ))}
//         </nav>
//       </header>
//       <main className="flex-1">
       
//         {/* Other sections here */}
//       </main>
      
//     </div>
//   );
// };

// export default HeroSection;
