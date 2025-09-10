import { Shield, Clock, Users, Award } from 'lucide-react';

const ProofBar = () => {
  const stats = [
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Guaranteed availability'
    },
    {
      icon: Clock,
      value: '<15min',
      label: 'Response Time',
      description: 'Critical issues'
    },
    {
      icon: Users,
      value: '200+',
      label: 'NYC Clients',
      description: 'SMBs & mid-market'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'NYDFS & HIPAA'
    }
  ];

  return (
    <div className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <IconComponent className="h-8 w-8 text-blue-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-blue-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-blue-300">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProofBar;