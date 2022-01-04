import React from 'react'

const Contactme = () => {
    const submit = (e) => {
        e.preventDefault()
    }
    return (
        <div class="bg-gray-800 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="contact">
  <div class="max-w-md w-full space-y-8">
    <div>
    <h1 class="text-center text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl  py-5">
            
            <span class=" block text-white xl:inline"> Contact me</span>
           
          </h1>
     
    </div>
    <form onSubmit={() => submit()} class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="rounded-md shadow-sm -space-y-px">
      <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" name="name" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="message" class="sr-only">Your Message</label>
          <input id="message" name="message" type="text" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your message"/>
        </div>
      </div>

       

      <div>
        <button type="submit" class="text-3xl group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
       <a href="mailto:miguelhernandez@gmail.com?Subject=Asunto%20">Submit</a>
          
        </button>
      </div>
    </form>
  </div>
</div>
    )
}

export default Contactme
