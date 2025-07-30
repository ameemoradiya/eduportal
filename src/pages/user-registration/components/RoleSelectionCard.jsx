import React from 'react';
import Icon from '../../../components/AppIcon';

const RoleSelectionCard = ({ role, isSelected, onSelect }) => {
  const roleConfig = {
    student: {
      icon: 'BookOpen',
      title: 'Student',
      description: 'Access courses, assignments, and grades',
      features: ['View course materials', 'Submit assignments', 'Track progress']
    },
    parent: {
      icon: 'Users',
      title: 'Parent',
      description: 'Monitor your child\'s academic progress',
      features: ['View child\'s grades', 'Communicate with teachers', 'Track attendance']
    },
    teacher: {
      icon: 'GraduationCap',
      title: 'Teacher',
      description: 'Manage classes and student progress',
      features: ['Create assignments', 'Grade submissions', 'Manage attendance']
    },
    admin: {
      icon: 'Shield',
      title: 'School Admin',
      description: 'Oversee institution operations',
      features: ['Manage users', 'System configuration', 'Analytics dashboard']
    }
  };

  const config = roleConfig[role];

  return (
    <div
      onClick={() => onSelect(role)}
      className={`
        relative p-6 rounded-lg border-2 cursor-pointer transition-smooth hover:shadow-elevated
        ${isSelected 
          ? 'border-primary bg-primary/5 shadow-subtle' 
          : 'border-border bg-surface hover:border-primary/50'
        }
      `}
    >
      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Check" size={14} color="white" />
          </div>
        </div>
      )}

      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center transition-smooth
          ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
        `}>
          <Icon name={config.icon} size={24} />
        </div>

        <div>
          <h3 className={`text-lg font-semibold ${
            isSelected ? 'text-primary' : 'text-foreground'
          }`}>
            {config.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {config.description}
          </p>
        </div>

        <div className="space-y-2">
          {config.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Check" size={12} color="var(--color-success)" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionCard;