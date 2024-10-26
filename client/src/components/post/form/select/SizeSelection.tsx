import { RadioGroup, Label, Radio } from '@headlessui/react'

interface SizeSelectionProps {
  onSizeChange: (sex: 0 | 1 | 2) => void,
  size: 0 | 1 | 2
}
// 0 = big, 1 = medium, 2 = small
const sizes = [{ value: 0, label: 'Grande' }, { value: 1, label: 'Mediano' }, { value: 2, label: 'Pequeño' }]

export default function SizeSelection({ size, onSizeChange }: SizeSelectionProps) {

  const handleChange = (value: 0 | 1 | 2) => {
    onSizeChange(value)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-dark-gray text-subtitle mb-2">Tamaño</label>
      <RadioGroup value={size} onChange={handleChange} className="flex space-x-4">
        {sizes.map(({ value: option, label }) => (
          <Radio
            key={option}
            value={option}
            className={({ focus, hover, checked }) =>
              `${hover ? ' ring-primary ' : 'ring-primary-light'}
              ${focus ? 'ring-primary ' : ''}
              ${checked ? 'bg-custom-gradient-3 text-white ring-0' : 'bg-white'}
              relative flex cursor-pointer rounded-lg w-full justify-center py-1.5 shadow-md focus:outline-none
              ring-1 ring-opacity-60 ring-offset-0
              `
            }
          >
            {({ checked }) => (
              <div className="flex flex-col items-center justify-evenly gap-0.5">
                <span>
                  <svg
                    className={option === 0 ? "w-8 h-8" : option === 1 ? "w-6 h-6" : "w-4 h-4"}
                    width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="object-contain" d="M14.8764 3.49663C14.4563 3.49663 14.0421 3.61592 13.6921 3.84047C13.3421 4.06447 13.0738 4.38311 12.9104 4.7555C12.7529 5.12845 12.7063 5.53835 12.7879 5.93427C12.8755 6.32962 13.0738 6.69307 13.3713 6.97866C13.6689 7.2637 14.048 7.45801 14.4622 7.53641C14.8706 7.61537 15.3023 7.57505 15.6874 7.42049C16.0782 7.26594 16.4049 7.00498 16.6441 6.66955C16.8774 6.33411 17 5.93931 17 5.53612C17 4.99516 16.7783 4.47662 16.3757 4.09415C15.979 3.71168 15.4364 3.49663 14.8764 3.49663ZM14.8764 6.41026C14.6955 6.41026 14.5206 6.3593 14.3689 6.26298C14.2172 6.16667 14.1005 6.0306 14.0305 5.87044C13.9663 5.71084 13.9488 5.535 13.9838 5.36589C14.0188 5.19621 14.1006 5.04054 14.2289 4.9179C14.3572 4.79582 14.5206 4.71238 14.6956 4.67878C14.8765 4.64518 15.0573 4.66254 15.2206 4.72862C15.3898 4.7947 15.5298 4.9067 15.629 5.05062C15.734 5.19454 15.7865 5.36308 15.7865 5.53612C15.7865 5.76795 15.6874 5.99027 15.5182 6.15435C15.349 6.31842 15.1156 6.41026 14.8764 6.41026ZM4.25289 5.53612C4.25289 5.13292 4.12462 4.7387 3.89127 4.40327C3.65791 4.06783 3.32531 3.80631 2.94027 3.65175C2.5494 3.4972 2.1236 3.45688 1.7094 3.53583C1.30103 3.61423 0.921761 3.80856 0.624232 4.09415C0.326704 4.37919 0.122518 4.74261 0.0408431 5.13853C-0.0408313 5.53388 -1.68821e-05 5.9438 0.163332 6.31675C0.320847 6.68914 0.595091 7.00778 0.945125 7.23234C1.29516 7.45633 1.70354 7.57562 2.12358 7.57562C2.68947 7.57562 3.23192 7.36113 3.62863 6.97866C4.02533 6.59619 4.25289 6.07707 4.25289 5.53612ZM2.12358 6.41026C1.94273 6.41026 1.76765 6.3593 1.6218 6.26298C1.47012 6.16667 1.3534 6.0306 1.28339 5.87044C1.21339 5.71084 1.19598 5.535 1.23098 5.36589C1.26598 5.19621 1.35345 5.04054 1.4818 4.9179C1.61014 4.79582 1.77352 4.71238 1.94854 4.67878C2.12355 4.64518 2.31018 4.66254 2.47353 4.72862C2.64271 4.7947 2.78284 4.9067 2.88202 5.05062C2.98119 5.19454 3.03356 5.36308 3.03356 5.53612C3.03356 5.76795 2.94025 5.99027 2.77106 6.15435C2.59605 6.31842 2.36861 6.41026 2.12358 6.41026ZM5.76976 4.07903C6.1898 4.07903 6.59819 3.95974 6.94822 3.73575C7.29825 3.51119 7.57236 3.19313 7.72987 2.82018C7.89322 2.44778 7.93403 2.03731 7.85236 1.64195C7.77068 1.24604 7.5665 0.882595 7.26897 0.59756C6.97144 0.311965 6.59232 0.11822 6.18395 0.0392617C5.76974 -0.039697 5.3438 0.00118273 4.95293 0.15518C4.5679 0.309737 4.23543 0.571242 4.00208 0.906676C3.76872 1.24211 3.64031 1.63635 3.64031 2.03954C3.64031 2.58049 3.86787 3.0996 4.26457 3.48207C4.66128 3.86454 5.20388 4.07903 5.76976 4.07903ZM5.76976 1.16539C5.95061 1.16539 6.12555 1.21691 6.2714 1.31267C6.42308 1.40899 6.5398 1.54564 6.60981 1.70524C6.67982 1.86483 6.69737 2.04066 6.66236 2.21034C6.62736 2.38001 6.53975 2.5357 6.41141 2.65777C6.28306 2.77985 6.11982 2.86329 5.94481 2.89689C5.76979 2.93049 5.58886 2.9137 5.41967 2.84706C5.25049 2.78098 5.1105 2.66897 5.01133 2.52506C4.91215 2.3817 4.85964 2.21258 4.85964 2.03954C4.85964 1.80771 4.95296 1.58539 5.12214 1.42131C5.29715 1.25779 5.52474 1.16539 5.76976 1.16539ZM11.2302 4.07903C11.6502 4.07903 12.0645 3.95974 12.4145 3.73575C12.7645 3.51119 13.0329 3.19313 13.1963 2.82018C13.3538 2.44778 13.4005 2.03731 13.3188 1.64195C13.2313 1.24604 13.0329 0.882595 12.7354 0.59756C12.4379 0.311965 12.0586 0.11822 11.6444 0.0392617C11.236 -0.039697 10.8044 0.00118273 10.4194 0.15518C10.0285 0.309737 9.69587 0.571242 9.46252 0.906676C9.22916 1.24211 9.10673 1.63635 9.10673 2.03954C9.10673 2.58049 9.32846 3.0996 9.731 3.48207C10.1277 3.86454 10.6701 4.07903 11.2302 4.07903ZM11.2302 1.16539C11.4111 1.16539 11.5861 1.21691 11.7378 1.31267C11.8895 1.40899 12.0061 1.54564 12.0761 1.70524C12.1403 1.86483 12.1578 2.04066 12.1228 2.21034C12.0878 2.38001 12.0003 2.5357 11.8778 2.65777C11.7495 2.77985 11.5861 2.86329 11.4111 2.89689C11.2302 2.93049 11.0494 2.9137 10.8861 2.84706C10.7169 2.78098 10.5768 2.66897 10.4776 2.52506C10.3726 2.3817 10.3202 2.21258 10.3202 2.03954C10.3202 1.80771 10.4194 1.58539 10.5886 1.42131C10.7577 1.25779 10.991 1.16539 11.2302 1.16539ZM12.9862 8.51247C12.677 8.34951 12.4087 8.12945 12.187 7.86513C11.9654 7.60081 11.802 7.29729 11.7086 6.97249C11.5044 6.3061 11.0844 5.72091 10.5068 5.30428C9.92342 4.88765 9.22339 4.66253 8.49998 4.66253C7.77658 4.66253 7.07655 4.88765 6.49316 5.30428C5.9156 5.72091 5.49553 6.3061 5.29134 6.97249C5.09883 7.62656 4.64383 8.17929 4.02544 8.50968C3.43038 8.81823 2.95781 9.30766 2.68945 9.90125C2.41526 10.4948 2.3569 11.1579 2.52609 11.7862C2.68943 12.4145 3.06869 12.9722 3.59957 13.3704C4.13629 13.7691 4.78966 13.9853 5.46639 13.9858C5.86893 13.9869 6.27148 13.9097 6.64485 13.7579C7.82913 13.2881 9.165 13.2881 10.3493 13.7579C11.0727 14.0586 11.8837 14.0799 12.6187 13.8178C13.3538 13.5552 13.9546 13.0305 14.293 12.3518C14.6372 11.6736 14.6897 10.8952 14.4447 10.1796C14.1997 9.4639 13.6804 8.86694 12.9862 8.51303V8.51247ZM11.5336 12.8205C11.2886 12.8205 11.0435 12.7729 10.816 12.6799C9.33421 12.0903 7.65991 12.0903 6.17227 12.6799C5.74056 12.8586 5.2563 12.8698 4.81293 12.7113C4.37538 12.5522 4.0137 12.2364 3.80951 11.8293C3.61116 11.4216 3.57622 10.9546 3.7279 10.5262C3.87375 10.0972 4.18878 9.73997 4.60298 9.52885C5.05219 9.29141 5.44306 8.97223 5.76392 8.5892C6.07895 8.2056 6.31811 7.76601 6.45812 7.29449C6.58647 6.87058 6.85486 6.49762 7.2224 6.23219C7.58993 5.96675 8.03911 5.82339 8.49998 5.82339C8.96086 5.82339 9.41004 5.96675 9.77757 6.23219C10.1451 6.49762 10.4135 6.87058 10.5418 7.29449C10.6819 7.76656 10.921 8.20728 11.2419 8.59144C11.5569 8.97503 11.9536 9.29478 12.4028 9.53165C12.7587 9.71589 13.0446 10.0099 13.208 10.3666C13.3713 10.7239 13.4063 11.1231 13.3071 11.5011C13.2079 11.8791 12.9803 12.2146 12.6595 12.4537C12.3386 12.6928 11.9419 12.8216 11.5336 12.8205Z" fill="currentColor" />
                  </svg>
                </span>
                <div className="text-sm">
                  <Label
                    as="p"
                    className={`${checked ? 'text-white' : 'text-gray-900'}`}
                  >
                    {label}
                  </Label>
                </div>
              </div>
            )}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  )
}