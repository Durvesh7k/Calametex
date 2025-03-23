# Calametex - Decentralized Crowdfunding Platform

Calametex is a decentralized crowdfunding platform built on the Polygon blockchain. It enables users to create and contribute to fundraising campaigns securely using cryptocurrency, ensuring transparency and immutability.

## Features

- **Decentralized Crowdfunding:** Users can create campaigns and raise funds directly on the blockchain.
- **Secure Transactions:** Donations are made through cryptocurrency using MetaMask integration.
- **Transparency & Immutability:** All transactions and campaign details are recorded on the blockchain.
- **User-Friendly Interface:** Built with Next.js for an interactive and seamless user experience.
- **Smart Contracts:** Secure and automated fund handling using Solidity and Hardhat.

## Tech Stack

- **Frontend:** Next.js, JavaScript, Tailwind CSS
- **Backend:** Solidity, Hardhat, Ethers.js
- **Blockchain:** Polygon
- **Authentication & Wallet Integration:** MetaMask

## Installation & Setup

### Prerequisites
- Node.js installed
- MetaMask extension in your browser
- Polygon network setup in MetaMask

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Durvesh7k/Calametex.git
   cd Calametex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

4. **Deploy Smart Contracts (Optional):**
   - Set up Hardhat
   - Deploy the contracts on the Polygon testnet

## Smart Contract Deployment

1. **Compile the contracts:**
   ```bash
   npx hardhat compile
   ```
2. **Deploy the contracts:**
   ```bash
   npx hardhat run scripts/deploy.js --network polygon
   ```

## Usage
- Connect MetaMask wallet.
- Create a campaign with a title, description, and goal amount.
- Contribute to a campaign using cryptocurrency.
- Track donations and campaign progress in real time.

## Future Enhancements
- Multi-chain support (Ethereum, Binance Smart Chain, etc.)
- Advanced analytics for campaign tracking
- NFT rewards for contributors
- Mobile-friendly UI improvements

## Contributing
Feel free to fork the repository and create a pull request with your enhancements or bug fixes.

## License
This project is licensed under the MIT License.

## Contact
For any queries or collaborations, reach out at [your email or LinkedIn].

