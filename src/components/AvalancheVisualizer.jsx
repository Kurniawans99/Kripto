import React from 'react';
import { hexToBytes } from '../utils/crypto'; 

const AvalancheVisualizer = ({ originalHex, newHex }) => {
  if (!originalHex || !newHex) return null;

  const getBits = (hex) => {
    return hexToBytes(hex).map(byte => byte.toString(2).padStart(8, '0')).join('');
  };

  const bits1 = getBits(originalHex);
  const bits2 = getBits(newHex);
  let diffCount = 0;
  
  const displayLength = Math.min(bits1.length, 64);
  const bitsDisplay = [];

  for(let i=0; i<bits1.length; i++) {
    if(bits1[i] !== bits2[i]) diffCount++;
    if(i < displayLength) {
      bitsDisplay.push({ 
        val1: bits1[i], 
        val2: bits2[i], 
        changed: bits1[i] !== bits2[i] 
      });
    }
  }

  const totalBits = bits1.length;
  const percentage = ((diffCount / totalBits) * 100).toFixed(2);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-zinc-700">Bit Avalanche Rate</div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-zinc-900">{percentage}%</span>
          <span className="text-xs text-zinc-500">bits changed</span>
        </div>
      </div>
      
      <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${parseFloat(percentage) > 45 ? 'bg-emerald-500' : 'bg-amber-500'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-xs text-zinc-500">
        Ideal Avalanche Effect mendekati 50%. Ini menunjukkan bahwa perubahan kecil pada input mengubah setengah dari output ciphertext.
      </p>

      <div className="mt-4">
        <div className="text-xs font-mono text-zinc-400 mb-2">First 64 bits comparison (White: Same, Red: Flipped)</div>
        <div className="grid grid-cols-16 gap-0.5">
          {bitsDisplay.map((bit, idx) => (
            <div 
              key={idx}
              title={`Bit ${idx}: ${bit.val1} -> ${bit.val2}`}
              className={`w-full aspect-square rounded-sm text-[8px] flex items-center justify-center
                ${bit.changed ? 'bg-red-500 text-white font-bold' : 'bg-zinc-100 text-zinc-300'}
              `}
            >
              {bit.changed ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvalancheVisualizer;