const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2D2424]">
    <div className="bg-[#3E3232] text-white p-8 rounded-2xl shadow-lg w-96">
      <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'Product Sans, sans-serif' }}>
        Welcome Back
      </h2>
      <p className="text-[#BFA181] text-center mb-6" style={{ fontFamily: 'Product Sans, sans-serif' }}>
        Sign in to continue chatting
      </p>

      <form>
        <div className="mb-4">
          <label className="block text-[#D7BFA6] font-semibold">Email</label>
          <input 
            type="email" 
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg border border-[#BFA181] bg-[#2D2424] text-white focus:outline-none focus:ring-2 focus:ring-[#BFA181]"
            style={{ fontFamily: 'Product Sans, sans-serif' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#D7BFA6] font-semibold">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border border-[#BFA181] bg-[#2D2424] text-white focus:outline-none focus:ring-2 focus:ring-[#BFA181]"
            style={{ fontFamily: 'Product Sans, sans-serif' }}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-[#BFA181] text-[#2D2424] py-3 rounded-lg font-semibold hover:bg-[#A38C6B] transition"
          style={{ fontFamily: 'Product Sans, sans-serif' }}
        >
          Login
        </button>
      </form>

      <p className="text-sm text-[#BFA181] text-center mt-4" style={{ fontFamily: 'Product Sans, sans-serif' }}>
        New here? <a href="#" className="text-white font-semibold hover:underline">Create an account</a>
      </p>
    </div>
  </div>
  )
}
export default LoginPage