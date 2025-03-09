"use client"

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ApplicationForm from './ApplicationForm';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: string | null;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  selectedCourse,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply to ST TECH ACADEMY</DialogTitle>
          <DialogDescription>
            Complete the form below to start your application process
          </DialogDescription>
        </DialogHeader>
        <ApplicationForm
          onSelectCourse={() => {}}
          selectedCourse={selectedCourse}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;